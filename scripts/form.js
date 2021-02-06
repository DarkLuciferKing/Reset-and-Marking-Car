class Form{
    constructor(){
        this.input = createInput("");
        this.input.position(windowWidth/2, 250);

        this.button = createButton("Play");
        this.button.position(windowWidth/2, 350);

        this.reset = createButton("Reset");
        this.reset.position(windowWidth - 100, 50);

        this.greeting = createElement("h6");
        this.greeting.position(windowWidth/2, 450);
    }




    display(){
        var title = createElement('h2');
        title.position(windowWidth/2, 50);
        title.html("Car Racing Game");        
        // Arrow functions
         
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            var name = this.input.value();
            this.greeting.html("Hello " + name);           
            playerCount++;
            player.index = playerCount;
            player.name = name;
            player.updatePlayerCount(playerCount);
            player.updatePlayerDetails();
           
        });

        this.reset.mousePressed(() => {
            game.updateGameState(0);
            player.updatePlayerCount(0);
            database.ref("players").remove();
            window.location.reload();
        })

    }

}