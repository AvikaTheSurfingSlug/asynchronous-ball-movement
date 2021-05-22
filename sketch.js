var database;
var GAMESTATE = 0;
var playerCount,allPlayers;
var form,player,game;
var CARS,car1,car2,car3,car3,car4;
var car1img,car2img,car3img,car4img,racetrackimg;
var carsAtEnd,pastFinished
var Silver,Gold,Bronze;
function preload(){
racetrackimg = loadImage("track.jpg");
car1img = loadImage("car1.png");
car2img = loadImage("car2.png");
car3img = loadImage("car3.png");
car4img = loadImage("car4.png");
Silver = loadImage("silver.png");
Gold = loadImage("gold.png");
Bronze = loadImage("bronze.png");
}
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount === 4 && carsAtEnd===0){
        game.update(1)
    }
    if(GAMESTATE === 1){
        clear();
        game.play();
    }
    if (GAMESTATE === 2 && carsAtEnd === 4){
        game.displayRanks()
    }
    if (carsAtEnd === 4){
        game.update(2)
    }
}

