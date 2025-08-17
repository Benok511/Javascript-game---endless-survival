let fpsInterval = 1000 / 30; // the denominator is frames-per-second
let now;
let then = Date.now();


let xhttp;

let background = [
    [0, 1, 1, 1, 66, 67, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5],
    [0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 5],
    [0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 15],
    [10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 15],
    [0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 5],
    [10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 5],
    [0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 15],
    [10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 5],
    [0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 5],
    [10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 15],
    [0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 15],
    [10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 5],
    [0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 5],
    [10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 15],
    [0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 15],
    [10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 5],
    [0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 5],
    [10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 15],
    [0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 5],
    [20, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 15],
    [0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 5],
    [10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 15],
    [0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 5],
    [20, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 15],
    [10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 15],
    [0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 5],
    [10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 5],
    [0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 15],
    [20, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 15],
    [40, 41, 42, 43, 41, 42, 43, 41, 42, 43, 41, 42, 43, 41, 42, 43, 41, 42, 43, 41, 42, 43, 41, 42, 43, 41, 42, 43, 41, 42, 43, 41, 42, 43, 41, 42, 43, 41, 42, 45],

];

let other_objects = [
    [-1, -1, -1, 90, -1, -1, 90, -1, -1, -1, -1, 74, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, 64, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 59, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, 68, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, 91, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 77, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 59, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],

];

let tileSize = 16;
let mainMenu


let powerUps = [
    {name:'health potion small', x : 0, y: 0, healthRestored : 10, position : 98, width : tileSize, height:tileSize},{name:'health potion large', x : 0, y:0, healthRestored : 20, position: 89, width : tileSize, height:tileSize},
    {name:'damage potion small', x : 0, y:0, damageIncreaseRatio : 1.5, position:87, width : tileSize, height:tileSize},{name:'damage potion large', x : 0, y:0, damageIncreaseRatio : 2, position : 97, width : tileSize, height:tileSize}

];


let health_num;
let canvas;
let context;
let ammo_count
let request_id;
let mouseXPos;
let levelCounter = 1;
let mouseYPos;
let enemies = [];
let detectionRadius = 100;

let bullets = [];
let bulletspeed = 20;

let newRoundPowerUps
let powerUpIndicator

let largeDmgBoost = false;
let smallDmgBoost = false;

let levelnum = 1;

let textDisplayed = false;

let tilesPerRow = 10;

let tilePerRowEnemies = 7;

let numRows = 30
let numCols = 40

let playAgainButton

let score_count;
let score = 0;
let level;

let player = {
    health : 100,
    x : tileSize * 4,
    y : tileSize,
    width : 16,
    height : 16,
    xSpeed : 2,
    ySpeed : 2,
    ammo : 12,
    taken_damage : false,
    flipped : false,
    tile:0,
    knockback : {
        active: false,
        xSpeed: 0,
        ySpeed: 0,
        duration: 0
    }
}

let moveLeft;
let moveDown;
let moveRight;
let moveUp;

let backgroundImage = new Image()
let enemyTiles = new Image()

let backgroundMusic = new Audio()
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;
backgroundMusic.play()

let enemyIntelligenceLevel = 3

let bossSprite = new Image()

let enemyDeathSound = new Audio()
let powerUpBreakingSound = new Audio()
let gameOverMusic = new Audio()
let wizardShotSound = new Audio()

let maxEnemies = 10;




document.addEventListener('DOMContentLoaded', init, false)

function init(){
    canvas = document.querySelector('canvas')
    ammo_count = document.querySelector('#ammo_count')
    context = canvas.getContext('2d')
    health_num = document.querySelector('#health')
    score_count = document.querySelector('#score')
    levelCounter = document.querySelector('#level_num')
    powerUpIndicator = document.querySelector('#powerUp')
    playAgainButton = document.querySelector('#playAgain')
    mainMenu = document.querySelector('#main_menu')


    window.addEventListener('keydown', activate, false)
    window.addEventListener('keyup', deactivate, false)
    canvas.addEventListener('click', shoot, false)

    level = newLevel(levelnum);
    newRoundPowerUps = generatePowerUps()

    load_assets([{"var" : backgroundImage, "url" : "static/Dungeon_Tileset.png"}, {"var" : enemyTiles, "url" : "static/Dungeon_Character_2.png"}
        , {'var' : backgroundMusic, 'url':'static/backgroundMusic.mp3'}, {'var':bossSprite,"url":'static/Eyeball.png'},
        {'var':enemyDeathSound, 'url':'static/enemyDeathNoise.mp3'}, {'var': powerUpBreakingSound, 'url':'static/powerUpBreaking.mp3'},
        {'var' : gameOverMusic, 'url':'static/gameOver.mp3'},{'var':wizardShotSound,'url':'static/wizardShot.mp3'}
    ], draw);

    


}

function draw(){
    request_id = window.requestAnimationFrame(draw);

    let now = Date.now();
    let elapsed = now - then
    if (elapsed <= fpsInterval){
        return;
    }
    then = now - (elapsed % fpsInterval)

    
    
    context.clearRect(0,0, canvas.width, canvas.height) 
    
    if (textDisplayed){
        context.font = '30px Sans Serif'
        context.fillStyle = 'Red'
    
        context.fillText('Round '+levelnum, (canvas.width /2) - 60,canvas.height/2)
        return
    }

    for (let r = 0; r < numRows; r++ ){
        for (let c = 0; c < numCols; c++){
            let tile = background[r][c]
            if (tile >= 0){
                let tileRow = Math.floor(tile/tilesPerRow)
                let tileCol = Math.floor(tile % tilesPerRow)
                context.drawImage(backgroundImage,
                    tileCol * tileSize, tileRow * tileSize, tileSize,tileSize,
                    c * tileSize, r * tileSize, tileSize, tileSize)
            }
        }
            
    }

    for (let r = 0; r < numRows; r++ ){
        for (let c = 0; c < numCols; c++){
            let tile = other_objects[r][c]
            if (tile >= 0){
                let tileRow = Math.floor(tile/tilesPerRow)
                let tileCol = Math.floor(tile % tilesPerRow)
                context.drawImage(backgroundImage,
                    tileCol * tileSize, tileRow * tileSize, tileSize,tileSize,
                    c * tileSize, r * tileSize, tileSize, tileSize)
            }
        }
            
    }

    


    flipImage(enemyTiles,0,0, tileSize, tileSize,
        player.x,player.y, tileSize,tileSize, player.flipped
    )

    if (player.knockback.active){
        player.x += player.knockback.xSpeed
        player.y += player.knockback.ySpeed

        player.knockback.xSpeed *= 0.9
        player.knockback.ySpeed *= 0.9
    
        player.knockback.duration -= 1
        if (player.knockback.duration <= 0) {
            player.knockback.active = false
        }
    }
    
    else{ 

        if (moveLeft && moveRight){

        }
        else{
            if (moveLeft){
            player.flipped = true
            player.x -= player.xSpeed
            }
            if (moveRight){
                player.flipped = false
                player.x += player.xSpeed

            
            }
    }

    if (moveUp){
        player.y -= player.ySpeed
    }


    if (moveDown){
        player.y += player.ySpeed
        
    }
    }
    

    if (player.x + player.width > canvas.width - tileSize){
        player.x = canvas.width - player.width - tileSize
    }

    if (player.x < tileSize){
        player.x = tileSize
    }

    if (player.y < tileSize){
        player.y = tileSize
    }
    
    if (player.y + player.height > canvas.height - tileSize){
        player.y = canvas.height - player.height - tileSize
    }

    

    context.fillStyle = 'blue'
    for (let bullet of bullets){
        bullet.x += bullet.xSpeed
        bullet.y += bullet.ySpeed


        if (!(bullet.x < 0 || bullet.x > canvas.width || bullet.y < 0 || bullet.y > canvas.height)){
            context.fillRect(bullet.x,bullet.y, bullet.width, bullet.height)

            
        }
        else{
            let i = bullets.indexOf(bullet)
            bullets.splice(i,1)
        }
        
        
    }

    
    for (let powerUpIndex = newRoundPowerUps.length - 1; powerUpIndex >= 0; powerUpIndex--){

        let powerUp = newRoundPowerUps[powerUpIndex]
        let tileRow = Math.floor(powerUp.position / tilesPerRow)
        let tileCol = Math.floor(powerUp.position % tilesPerRow)

        context.drawImage(backgroundImage,
          tileCol * tileSize, tileRow * tileSize, tileSize,tileSize,
          powerUp.x,powerUp.y,tileSize,tileSize
        )
        
        for (let enemyI = enemies.length-1; enemyI >= 0; enemyI--){
            let enemy = enemies[enemyI]

            if (collides(enemy,powerUp)){
                newRoundPowerUps.splice(powerUpIndex,1)
                powerUpBreakingSound.volume = 0.5
                powerUpBreakingSound.play()
            }
        }
        

        if (collides(powerUp,player)){
            if (powerUp.name[0] === 'h'){
                if (player.health + powerUp.healthRestored  > 100){
                    player.health = 100
                }
                else{
                    player.health += powerUp.healthRestored
                }
                
                health_num.innerHTML = player.health
                powerUpIndicator.innerHTML = 'Health Increased!'
                

            }

            else if (powerUp.name[0] === 'd'){
                if (powerUp.name.slice(-1) === 'e'){
                    largeDmgBoost = true
                }
                else{
                    smallDmgBoost = true
                }

                if (smallDmgBoost && largeDmgBoost){
                powerUpIndicator.innerHTML = 'Damage Boosted by ' + (powerUps[2].damageIncreaseRatio * powerUps[3].damageIncreaseRatio)

                }
                else{
                    powerUpIndicator.innerHTML = 'Damage Boosted by ' + powerUp.damageIncreaseRatio
                   
                }
                
                
            }
            newRoundPowerUps.splice(powerUpIndex,1)
        }

    }

    


    

    for (let enemy_index = enemies.length - 1; enemy_index >= 0; enemy_index = enemy_index - 1 ){

        let enemy = enemies[enemy_index]

        if (enemy.xSpeed < 0){
            enemy.flipped = true
        }
        else{
            enemy.flipped = false
        }


        if (enemy.isBoss){
            
            
            
            enemy.frameTimer += 1
            if (enemy.frameTimer >= enemy.frameInterval) {
                enemy.xFrame = (enemy.xFrame + 1) % 4   
                enemy.frameTimer = 0
            }


            if (enemy.xSpeed != 0){
                enemy.yFrame = 1
            }
            else{
                enemy.yFrame = 0
            }

            
            flipImage(enemy.image, enemy.xFrame * enemy.width, enemy.yFrame * enemy.height, enemy.width, enemy.height,
                enemy.x, enemy.y,enemy.width,enemy.height, enemy.flipped
            )
            

        }

        else{
            let tile_row = Math.floor(enemy.tile/tilePerRowEnemies)
            let tile_col = Math.floor(enemy.tile % tilePerRowEnemies)

            


            flipImage(enemy.image, tile_row * tileSize, tile_col * tileSize, tileSize, tileSize,
                enemy.x,enemy.y, tileSize,tileSize, enemy.flipped
            )
        }

        let xchange = player.x - enemy.x
        let ychange = player.y - enemy.y
        let distance = Math.sqrt((xchange*xchange)+(ychange*ychange))

        if (distance < enemy.detectionRadius && enemyIntelligenceLevel <= levelnum){
            enemy.xSpeed = (xchange / distance) * enemy.chaseSpeed
            enemy.ySpeed = (ychange / distance) * enemy.chaseSpeed

            if (enemy.x < tileSize || enemy.x + enemy.width > canvas.width - tileSize 
                || enemy.y < tileSize || enemy.y + enemy.height > canvas.height - tileSize ){ // if an enemy chasing the player causes 
                                                                                              //it to clip out it will tp it back in

                    enemy.x = randint(tileSize, canvas.width - 20 - tileSize)
                    enemy.y = randint(tileSize, canvas.height - 20 - tileSize)
                }

        }

        else{
            enemy.moveCount += 1
            if (enemy.moveCount === 150){
                enemy.xSpeed = randint (-2,2)
                enemy.ySpeed = randint (-2,2)
                enemy.moveCount = randint(0,60)

            }

        }

        if (enemy.x < tileSize || enemy.x + enemy.width > canvas.width - tileSize){
            enemy.xSpeed = enemy.xSpeed * -1
        }

        if (enemy.y < tileSize || enemy.y + enemy.height > canvas.height - tileSize){
            enemy.ySpeed = enemy.ySpeed * -1
        }

        enemy.x += enemy.xSpeed
        enemy.y += enemy.ySpeed

        if (collides(player,enemy)){

            if (! player.taken_damage){
                player.health -= enemy.damage
                player.taken_damage = true

                setTimeout(allowDamageTaken, 300)

                let knockbackSpeed = 6
                let xchange = player.x - enemy.x
                let ychange = player.y - enemy.y
                let distance = Math.sqrt(xchange * xchange + ychange * ychange)
            
                player.knockback.xSpeed = (xchange / distance) * knockbackSpeed
                player.knockback.ySpeed = (ychange / distance) * knockbackSpeed
                player.knockback.duration = 10
                player.knockback.active = true
            
            }
            
     
            if (player.health <= 0){
                backgroundMusic.pause()
                playAgainButton.className = 'button'
                mainMenu.className = 'button'
                gameOverMusic.volume = 0.5
                gameOverMusic.play()
                stop('You died. Your Score was '+score);
            }

            health_num.innerHTML = player.health
        }

        
        for (let bullet_index = bullets.length - 1; bullet_index >= 0; bullet_index -= 1){ 

            let bullet = bullets[bullet_index];

            

            if (collides(bullet,enemy)){
                enemy.health -= bullet.damage
                bullets.splice(bullet_index,1)

                if (enemy.health <= 0){
                    if (enemy.isBoss){
                        score += 5
                        enemy.yFrame = 3
                        
                        
                    }

                    else{
                        score += 1
                    }
                    
                    score_count.innerHTML = score


                    enemies.splice(enemy_index,1)
                    enemyDeathSound.volume = 0.3
                    enemyDeathSound.play()
                }
            }
        }

        for (let enemy2 of enemies){
            if (enemy2 != enemy){
                if (collides(enemy,enemy2)){
                    enemy.xSpeed = enemy.xSpeed * -1
                    enemy.ySpeed = enemy.ySpeed * -1
                    enemy2.xSpeed = enemy2.xSpeed * -1
                    enemy2.ySpeed = enemy2.ySpeed * -1
                }
            }
        }
    }

    //set timeout for new level

    if (level.length === 0){
        levelnum +=1

        levelCounter.innerHTML = levelnum

        
        textDisplayed = true

        setTimeout(clearCanvasText, 4000)

        backgroundMusic.currentTime = 0;
        backgroundMusic.play();

            
        player.health = 100;
        health_num.innerHTML = player.health;
        player.x  = tileSize * 4;
        player.y = tileSize;
        player.ammo = 12
        ammo_count.innerHTML = player.ammo
        bullets = [];
        smallDmgBoost = false
        largeDmgBoost = false
        powerUpIndicator.innerHTML = 'None'

        newRoundPowerUps = generatePowerUps()
        level = newLevel(levelnum);
        
        

    }

    
    
}

function shoot(event){      
    
    if(player.ammo < 1){
        ammo_count.innerHTML = 'Reloading...'
        setTimeout(reload,2000)
        
        return
    }
    
    else{

        //getBoundingClient method taken from w3Schools to ensure that the bullet is going where the user clicked relative to
        // the canvas rather than the viewport
        //https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp

        let canvas_pos = canvas.getBoundingClientRect();
        let xpos = event.clientX - canvas_pos.left;
        let ypos = event.clientY - canvas_pos.top;

        


         
        
        // get the difference in x and y to get the direction of the click

        let ydiff = ypos - (player.y + player.height / 2)
        let xdiff = xpos - (player.x  + player.width / 2)

        // get the distance between the click and the player to normalizw the vector 

        let distance = Math.sqrt((xdiff * xdiff) + (ydiff * ydiff))

        let xSpeed = (xdiff/distance) * bulletspeed
        let ySpeed = (ydiff/distance) * bulletspeed

        let bullet = {
            x : player.x + (player.width /2),
            y : player.y + (player.height / 2 ),
            width : 7,
            height : 7,
            xSpeed : xSpeed,
            ySpeed : ySpeed,
            damage : 15
        }

        if (smallDmgBoost){
            bullet.damage *= powerUps[2].damageIncreaseRatio
        }

        if (largeDmgBoost){
            bullet.damage *= powerUps[3].damageIncreaseRatio
        }

            bullets.push(bullet)
            player.ammo -= 1

            // cloneNode method used to have layering wizard shot noises as before it would only play once in full before
            // playing again I adapted and learned how it works from
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode

            let shot = wizardShotSound.cloneNode()
            shot.volume = 0.5 
            shot.play()
    }
    
    ammo_count.innerHTML = player.ammo

    
    
    
}

// use of the spread operator to create copies of the powerUp objects in the array i defined at the start as without it 
// i was only able to have 4 power ups at max now i can have more than that
// i adapted the use of the spread operator from w3schools linked below
// https://www.w3schools.com/react/react_es6_spread.asp

function generatePowerUps(){
    let newRoundPowerUps = []
    let powerUpsPerRound = levelnum

    for (let i = 0; i < powerUpsPerRound; i++){
        newRoundPowerUps.push({ ... powerUps[randint(0,powerUps.length - 1)]})
    }

    for (let powerUp of newRoundPowerUps){
        powerUp.x = tileSize * randint(1,numCols-2)
        powerUp.y = tileSize * randint(1,numRows-2)

        
        if (powerUp.x >= player.x && powerUp.x <= player.x + player.width && powerUp.y >= player.y && powerUp.y <= player.y + player.height){
            powerUp.x = tileSize * randint(1,numCols-2)
            powerUp.y = tileSize * randint(1,numRows-2)
        }
        
        for (let powerUp2 of newRoundPowerUps){
            if (powerUp.x === powerUp2.x && powerUp.y === powerUp2.y){
                powerUp.x = tileSize * randint(1,numCols-2)
                powerUp.y = tileSize * randint(1,numRows-2)
            }
        }

    }

    return newRoundPowerUps
}


function collides(obj1,obj2){
    if(obj1.x + obj1.width < obj2.x ||
        obj2.x + obj2.width < obj1.x ||
        obj1.y > obj2.y + obj2.height ||
        obj1.y + obj1.height < obj2.y){
            return false;
    }
    else{
        return true;
    }
}

function stop(outcomt_txt){
    window.removeEventListener("keydown", activate)
    canvas.removeEventListener("click", shoot)
    window.removeEventListener('keyup', deactivate)
    window.cancelAnimationFrame(request_id)
    let outcome_element = document.querySelector('#outcome')
    outcome_element.innerHTML = outcomt_txt

    let data = new FormData()
    data.append('score',score)
    
    xhttp = new XMLHttpRequest()
    xhttp.addEventListener('readystatechange', handle_response, false)
    xhttp.open('POST', 'send-score', true)
    xhttp.send(data)

}   

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function activate(event){
    let key = event.key
    if (event.key === "ArrowLeft" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowUp" ||
        event.key === "ArrowDown" ||
        event.key === "w" ||
        event.key === "a" ||
        event.key === "d" ||
        event.key === "s"){
            event.preventDefault()
        }

    if (key === "ArrowLeft" || key === "a"){
        moveLeft = true;
    } else if (key === "ArrowRight"|| key === "d"){
        moveRight = true;
    } else if (key === 'ArrowUp'|| key === "w"){
        moveUp = true;
    } else if (key === 'ArrowDown'|| key === "s"){
        moveDown = true;
    }
}


function deactivate(event){
    let key = event.key

    if (key === "ArrowLeft" || key === "a"){
        moveLeft = false;
    } else if (key === "ArrowRight" || key === "d"){
        moveRight = false;
    } else if (key === 'ArrowUp' || key === "w"){
        moveUp = false;
    } else if (key === 'ArrowDown' || key === "s"){
        moveDown = false;
    }
}

function reload(){
    player.ammo = 12
    ammo_count.innerHTML = player.ammo
    return
}

function newLevel(levelnum){
    let enemie_per_lvl = levelnum

    if (levelnum % 5 === 0){
        enemie_per_lvl -= 2

        let boss = {
            isBoss : true,
            health : 200,
            x : randint(tileSize, canvas.width - 20 - tileSize),
            y : randint(tileSize,canvas.height - 20 - tileSize),
            width: 32,
            height:32,
            xSpeed : randint(-1,1),
            ySpeed : randint(-1,1),
            damage : 20 + (levelnum * 1.5),
            moveCount : randint(0,60),
            xFrame:0,
            yFrame:0,                  
            chaseSpeed : 1,          
            flipped: false,
            image : bossSprite,
            frameTimer: 0,
            frameInterval: 8,
            detectionRadius : 10000 // can always see you 

        }

        if (boss.x >= player.x && boss.x <= player.x + player.width && boss.y >= player.y && boss.y <= player.y + player.height){
            boss.x = randint(tileSize, canvas.width - boss.width - tileSize)
            boss.y = randint(tileSize,canvas.height - boss.height - tileSize)
        }

        for (let enemy of enemies){
            if (boss.x === enemy.x){
                boss.x = randint(tileSize,canvas.width - boss.width - tileSize)
            }
        
            if (boss.y === enemy.y ){
                boss.y = randint(tileSize,canvas.height - boss.height - tileSize)
            }
        }
        

        

        enemies.push(boss)
    }

    if (enemie_per_lvl > maxEnemies){
        enemie_per_lvl = maxEnemies     // no more than 10 enemies to prevent a clogging up of the canvas
                                        // enemies still get stronger each round
    }

    for (let i = enemie_per_lvl; i > 0; i = i -1){
        let ghost = {
            isBoss : false,
            health: 50,
            x : randint(tileSize, canvas.width - 20 - tileSize),
            y : randint(tileSize,canvas.height - 20 - tileSize),
            width: 16,
            height:16,
            xSpeed : randint(-2,2),
            ySpeed : randint(-2,2),
            damage : 10 + (levelnum * 1.5),
            moveCount : randint(0,60),
            tile : 8,
            detectionRadius : 100,
            chaseSpeed : 2,
            flipped : false,
            image : enemyTiles,
            tilePerRow : 7,
            detectionRadius : 100
        }

        // as the rounds go on the standard enemy gets stronger

        if (ghost.x >= player.x && ghost.x <= player.x + player.width && ghost.y >= player.y && ghost.y <= player.y + player.height){
            ghost.x = randint(tileSize, canvas.width - ghost.width - tileSize)
            ghost.y = randint(tileSize,canvas.height - ghost.height - tileSize)
        }

        

        for (let enemy of enemies){
            if (ghost.x === enemy.x){
                ghost.x = randint(tileSize,canvas.width - ghost.width - tileSize)
            }

            if (ghost.y === enemy.y ){
                ghost.y = randint(tileSize,canvas.height - ghost.height - tileSize)
            }
        }

        enemies.push(ghost)
    }

    return enemies
}

// translate function used to keep the flipped image on the canvas after scaling learned from https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate
// scale function used to keep flip the image learned from https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale
// save and restore method used to save the state before translation and then restoring to ensure the translation is only in place during image flipping
//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save
//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/restore

function flipImage(img, sx, sy, sw, sh, dx, dy, dw, dh, flipped) {
    context.save();

    if (flipped){
        context.translate(dx + dw, dy);
        context.scale(-1, 1);
        dx = 0;
        dy = 0;
    }

    context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
    context.restore();
}

function allowDamageTaken(){
    player.taken_damage = false;
    return
}

function clearCanvasText(){
    textDisplayed = false;
    return
}


function load_assets(assets,callback){
    let num_assets = assets.length
    let loaded = function(){
        console.log('loaded');
        num_assets -= 1
        if (num_assets === 0){
            callback();
        }
    };
    for (let asset of assets){
        let element = asset.var;
        if (element instanceof HTMLImageElement){
            console.log('img');
            element.addEventListener('load',loaded,false)
        }
        else if (element instanceof HTMLAudioElement){
            console.log('audio')
            element.addEventListener('canplaythrough',loaded, false)
        }
        element.src = asset.url
    }
}

function handle_response(){
    if (xhttp.readyState === 4){
        if (xhttp.status === 200){
            if (xhttp.responseText === 'success'){
                console.log('yes')
            
            }
            else{
                console.log('no')
            }
        }
    }
}

