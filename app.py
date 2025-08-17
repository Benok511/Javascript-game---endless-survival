from flask import *
from forms import *
from database import get_db,close_db
from werkzeug.security import generate_password_hash,check_password_hash
from flask_session import Session
from functools import wraps




app = Flask(__name__)

app.config["SECRET_KEY"] = "this-is-my-secret-key"
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = 'filesystem'


Session(app)
app.teardown_appcontext(close_db)

@app.before_request
def load_logged_in_user():
    g.user = session.get('user_id',None)

def login_required(view):
    @wraps(view)
    def wrapped_view(*args, **kwargs):
        if g.user is None:
            return redirect(url_for('login', next = request.url))
        return view(*args, **kwargs)
    return wrapped_view



@app.route('/')
def index():
    return render_template('index.html')


@app.route('/dungeons')
@login_required
def game():
    return render_template('game.html')


@app.route('/register', methods=["GET", 'POST'])
def register():
    form = registerForm()
    if form.validate_on_submit():
        user_id = form.user_id.data
        password = form.password.data 
        db = get_db()
        clash = db.execute('''Select * from users Where user_id = ?''', (user_id,)).fetchone()

        if clash is not None:
            form.user_id.errors.append('This username is taken')
        else:
            db.execute(''' INSERT INTO users (user_id, password) 
                           VALUES (?, ?);''', (user_id, generate_password_hash(password)))

            db.commit()

            return redirect(url_for('login'))
    
    return render_template('register.html', form=form, title = "Registration")

@app.route('/login', methods=['GET','POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user_id = form.user_id.data
        password = form.password.data
        db = get_db()
        in_db = db.execute('''SELECT * FROM users WHERE user_id = ?''', (user_id,)).fetchone()

        if in_db is None:
            form.user_id.errors.append('This user does not exist!')

        elif not check_password_hash(in_db['password'], password):
            form.password.errors.append('Incorrect Password')
            
        else:
            session.clear()
            session['user_id'] = user_id
            session.modified = True
            next_page = request.args.get('next')
            if not next_page:
                next_page = url_for('index')
            return redirect(next_page)
            
        
    return render_template('login.html', form=form, title = 'Login')

@app.route('/logout')
def logout():
    session.clear()
    session.modified = True
    return redirect(url_for('index'))

@app.route('/send-score', methods = ['POST'])
def send_score():
    score = int(request.form['score'])

    db = get_db()

    check = db.execute('''SELECT * FROM leaderboard WHERE user_id = ?''', (g.user,)).fetchone()

    if check is None:
        db.execute('INSERT INTO leaderboard VALUES (?,?)', (g.user,score))
    else:
        if score > check['score']:
            db.execute('''UPDATE leaderboard SET score = ? WHERE user_id = ?''',(score,g.user))


    

    db.commit()
    return 'success'


@app.route('/view-leaderboard')
def view_leaderboard():

    db = get_db()
    scores = db.execute('''SELECT * FROM leaderboard ORDER BY score DESC''').fetchall()

    return render_template('leaderboard.html', scores=scores)


