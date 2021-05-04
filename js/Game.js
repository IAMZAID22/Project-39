class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

c1 = createSprite(300,800,40,40);
c1.addImage(playerImg)
c2 = createSprite(600,800,40,40);
c2.addImage(enemyImg)
cars = [c1,c2];


  }

  play(){
    form.hide();
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
      background("grey")
      image(bg, 0,-displayHeight*4,displayWidth, displayHeight*5);
    //back = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
    // back.addImage(bg)
     // var display_position = 130;
     var index = 0;
     var x = 200;
     var y;

      for(var plr in allPlayers){
        index = index + 1;
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
        if(index === player.index){
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y

        }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance>3020){
      gameState = 2;
    }
      drawSprites();
    
  
    

    drawSprites();
  }
  end(){
 var title1 = createElement('h1')
    title1.html("Game Over!");
    title1.position(displayWidth/2-50,100);
      console.log(player.distance)
    }
}
