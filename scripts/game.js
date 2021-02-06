class Game{
    constructor(){

    }








    getGameState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
            gameState = data.val();
        }, function(errorMsg) {
            console.log(errorMsg)
        });

    }

    updateGameState(stateValue){
        var databaseRef = database.ref("/");
        databaseRef.update({
            gameState : stateValue
        });        
    }

    start() {
        if(gameState === 0) {
            player = new Player();
            player.getPlayerCount();
            form = new Form();
            form.display();
        }

        car1 = createSprite(windowWidth/2 - 300, windowHeight)
        car2 = createSprite(windowWidth/2 - 100, windowHeight)
        car3 = createSprite(windowWidth/2 + 100, windowHeight)
        car4 = createSprite(windowWidth/2 + 300, windowHeight)

        cars = [car1, car2, car3, car4];

        car1.addImage("1", car1IMG)
        car2.addImage("2", car2IMG)
        car3.addImage("3", car3IMG)
        car4.addImage("4", car4IMG)

    }

    play(){
        form.greeting.hide();
        textSize(20);
        text("Game Started", 200, 150);


        
        Player.readPlayers();                                                       
        if(allPlayers !== undefined) { 
            background(ground);
            image(track, 0, -9 * windowHeight, windowWidth, 10 * windowHeight);
            var yPos = 200;
            var index = 0;
            for(var plr in allPlayers) {
                yPos = windowHeight - 50 - allPlayers[plr].distance;
                cars[index].y = yPos
                if(plr === "player" + player.index) {
                    // cars[index].shapeColor = "red";
                    fill("red")
                    ellipse(cars[index].x, cars[index].y + 75, 10, 10)
                    camera.position.x = windowWidth/2;
                    camera.position.y = cars[index].y
                }
                index++;
            }
            
            if(keyDown("w")){
             player.distance += 50;
             player.updatePlayerDetails();
            }

            if(player.distance > 9300) {
              gameState = 2
            }

        }




        drawSprites();

    }

    end(){
        text("Game Over", windowWidth/2 - 50, camera.position.y + 50)
    }
}

