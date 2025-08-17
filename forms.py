from flask_wtf import FlaskForm
from wtforms import *
from wtforms.validators import InputRequired, NumberRange, EqualTo,Length, Optional


class registerForm(FlaskForm):
    user_id = StringField("Username:", validators=[InputRequired('This field is required!')])

    password = PasswordField('Password:', validators=[InputRequired('This field is required')])

    password2 = PasswordField('Confirm Password:', validators=[InputRequired('This field is required'), EqualTo('password')])

    submit = SubmitField('Register')

class LoginForm(FlaskForm):
    user_id = StringField("Username:", validators=[InputRequired('This field is required!')])

    password = PasswordField('Password:', validators=[InputRequired('This field is required')])

    submit = SubmitField()