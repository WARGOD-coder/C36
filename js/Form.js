class Form{
    constructor(){


    }

    display(){
        var title = createElement("h2","Car Racing Game");
        title.position(135,0);

        var input = createInput("Name");
        input.position(130,160);

        var button = createButton("Play");
        button.position(250,200)
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount = playerCount+1;
            player.updateCount(playerCount);

            player.updateName(name);

            var greeting = createElement("h3","Hello "+name)
            greeting.position(140,160)
        })
    }
}