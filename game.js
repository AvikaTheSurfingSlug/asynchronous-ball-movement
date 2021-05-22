class Game{
    constructor(){
    }
    getState(){
        var gamestateREF = database.ref('gamestate');
        gamestateREF.on("value",function(data){
            GAMESTATE = data.val();
        })
    }
    update(State){
        database.ref('/').update({
            gamestate:State
        })
    }                             
    start(){
        if (GAMESTATE === 0){
           player = new Player() ;
           player.getCount();
           form = new Form() ;
           form.display()
        }
        car1 = createSprite(100,200);
        car1.addImage(car1img);
        car2 = createSprite(300,200);
        car2.addImage(car2img);
        car3 = createSprite(500,200);
        car3.addImage(car3img);
        car4 = createSprite(700,200);
        car4.addImage(car4img);
        pastFinished = false
        CARS = [car1,car2,car3,car4]
    }
    play(){
        form.hide();
        text("game start",120,100);
        Player.getPlayerInfo();
        player.getCarsAtEnd();
        if(allPlayers!== undefined){
            image(racetrackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
            //var position = 130;
            var index = 0;
            var y ;
            var x = 175
            for(var plr in allPlayers){
                index = index+1
                x = x+200
                y = displayHeight-allPlayers[plr].distance;
                CARS[index - 1].x = x
                CARS[index - 1].y = y
                if(index=== player.index){
                    fill("red");
                    ellipse(x,y,60,60)
                   CARS [index-1].shapeColor = "red"
                   camera.position.x = displayWidth/2
                   camera.position.y = CARS[index-1].y
                }
                textSize(20);
                text(allPlayers[plr].name,cars[index-1].x, cars[index-1].y+75)
             /*   else{
                    fill("black");
                }
                position = position+20;
                text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,position)*/
            }
        }
        if(keyDown("W")&& playerIndex!== null && pastFinished!== true){
            player.distance = player.distance + 50;
            player.update();
        }
        if(player.distance > 3800 && pastFinished === false ){
            Player.updateCarsAtEnd();
            player.rank = carsAtEnd;
            player.update()
            pastFinished = true
        }
        drawSprites();
    }
    displayRanks() {
        camera.position.x = 0
        camera.position.y = 0
        imageMode(CENTER)
        Player.getPlayerInfo();
        image(Bronze,displayWidth/4,-100+displayHeight/10,200,240);
        image(Silver,displayWidth/4,-100+displayHeight/10,225,270);
        image(Gold,0,-100,250,300);
        textAlign(CENTER);
        textSize(30);
        for(var plr in allPlayers){
            if(allPlayers[plr].rank===1){
                text("first :" +allPlayers[plr].name,0,85)
            }
            else if(allPlayers[plr].rank===2){
                text("second :"+allPlayers[plr].name,-355,175)
            }
            else if(allPlayers[plr].rank===3){
                text("third :"+allPlayers[plr].name,350,175)
            }
            else{
                textSize(30)
                text("honor of the mention :"+allPlayers[plr].name,0,200)
            }
        }
    }
}