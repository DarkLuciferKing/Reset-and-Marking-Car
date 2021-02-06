    class Player {
        constructor(){
            this.name = "";
            this.distance = 0
            this.index = 0
        }

        getPlayerCount(){
            var playerCountRef = database.ref("playerCount")
            playerCountRef.on("value",function(data){
                console.log(data);
                playerCount = data.val()
            }, function(errorMsg) {
                console.log(errorMsg)
            });
        }

        updatePlayerCount(countVal){
            database.ref("/").update({
                playerCount : countVal
            });            
        }

        updatePlayerDetails() {
            var playerRef = database.ref("players/player" + this.index);
            playerRef.set({
                playerName : this.name,
                distance : this.distance
            });
        }

        static readPlayers(){
            var playersRead = database.ref("players");
            playersRead.on("value", function(data){
                allPlayers = data.val()
            }, function(errorMsg) {
                console.log(errorMsg)
            });
        }

         
         

    }