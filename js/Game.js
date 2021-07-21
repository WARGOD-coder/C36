class Game {
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState= data.val();
        })
    }

    update(gamestate){
     database.ref("/").update({      //"/"is root node
         gameState : gamestate
     })
    }

    start(){
        if(gameState===0){
         form = new Form();
         form.display();

         player = new Player();
         player.getCount();
        }
    }
}