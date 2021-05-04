var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var c1,c2,c3,c4,cars = [],back;

function preload() {
  playerImg = loadImage("player car.png")
  enemyImg = loadImage("enemy car.png")
  bg = loadImage("track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20,displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
}
