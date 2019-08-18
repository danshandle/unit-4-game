

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

var theGame = {
    score: 0,
    randomNumber: 0,
    wins:0,
    losses:0,
    crystal1:0,
    crystal2:0,
    crystal3:0,
    crystal4:0,
    initialize: function(){
        this.score = 0;
        $("#score").text(this.score);
        $("#wins").text(this.wins);    
        $("#losses").text(this.losses);
        $("button .value").text(" ");

        this.randomNumber = randomIntFromInterval(19, 120);
        $("#random-number").text(theGame.randomNumber);

        this.crystal1 = randomIntFromInterval(1, 12);
        this.crystal2 = randomIntFromInterval(1, 12);
        this.crystal3 = randomIntFromInterval(1, 12);
        this.crystal4 = randomIntFromInterval(1, 12);

        $("#restart").css("display", "none");
    },

    lostGame: function(){
        if( this.score > this.randomNumber)
            return true;
        else    
            return false;
    },

    wonGame: function(){
        if( this.score === this.randomNumber )
            return true;
        else
            return false;
    }, 

    checkStatus: function(){
        if(this.lostGame()){
            $("#score").append(" <span id='message'>YOU LOST</span>");
            $("#restart").css("display", "inline");
            this.losses++;
            $("#losses").text(this.losses);
        }
        else if(this.wonGame()){
            $("#score").append(" <span id='message'>YOU WON</span>");
            $("#restart").css("display", "inline");
            this.wins++;
            $("#wins").text(this.wins);
        }
    }

};

$(document).ready(function() {
    theGame.initialize();

   $("#crystal-1").on("click", function(){
        if(!theGame.wonGame() && !theGame.lostGame()){
            theGame.score += theGame.crystal1;
            $("#score").text(theGame.score);
            theGame.checkStatus();
        }
    });
    
    $("#crystal-2").on("click", function(){
        if(!theGame.wonGame() && !theGame.lostGame()){
            theGame.score += theGame.crystal2;
            $("#score").text(theGame.score);
            theGame.checkStatus();
        }
    });
    
    $("#crystal-3").on("click", function(){
        if(!theGame.wonGame() && !theGame.lostGame()){
            theGame.score += theGame.crystal3;
            $("#score").text(theGame.score);
            theGame.checkStatus();
        }
    });
    
    $("#crystal-4").on("click", function(){
        if(!theGame.wonGame() && !theGame.lostGame()){
            theGame.score += theGame.crystal4;
            $("#score").text(theGame.score);
            theGame.checkStatus();
        }
    });

    $("#restart").on("click", function(){
        theGame.initialize();
    });

});