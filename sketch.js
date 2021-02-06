var database;
var gameState = 0;
var playerCount = 0;
var game, form, player;
var allPlayers;
var car1, car2, car3, car4;
var cars = [];
var ground, car1IMG, car2IMG, car3IMG, car4IMG, track;

function preload(){
    car1IMG = loadImage("images/car1.png")
    car2IMG = loadImage("images/car2.png")
    car3IMG = loadImage("images/car3.png")
    car4IMG = loadImage("images/car4.png")
    ground = loadImage("images/ground.png")
    track = loadImage("images/track.jpg")
}

function setup(){
    createCanvas(windowWidth - 50,windowHeight - 50);
    database = firebase.database()

    game = new Game();
    game.getGameState();
    game.start();

}

function draw(){
    if(playerCount === 4 && gameState === 0) {
        game.updateGameState(1);
    }
    if(gameState === 1) {
        clear();
        game.play();
    }

    if(gameState === 2) {
        game.end();
    }
}

