class Player{
    constructor(){
        this.index = null;
        this.distance= 0;
        this.name = null;
        this.rank = 0

    }
    getCount(){
        var playerCountREF = database.ref('playerCount');
        playerCountREF.on("value",function(data){
            playerCount = data.val();
        })
    }
    updateCount(count){
    database.ref('/').update({
        playerCount : count 
    })
    }
    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,distance:this.distance,rank:this.rank
        })
    }
    static getPlayerInfo(){
        var playerInfoREF = database.ref('players');
        playerInfoREF.on("value",(data)=>{
            allPlayers = data.val();
        });
    }
    getCarsAtEnd(){
        var carsAtEndref = database.ref('carsAtEnd')
        carsAtEndref.on("value",(data)=>{
            carsAtEnd = data.val()
        })
    }
    static updateCarsAtEnd(){
        database.ref('/').update({
            carsAtEnd : carsAtEnd + 1
        })
        this.rank += 1
    }
}