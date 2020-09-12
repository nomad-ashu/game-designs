// alert("hello");

//Set starting scene
// 1. Both dice should have image set to dice 6
// 2. Player score should be zero
// 3. Roll it button should be enabled for player 1 and disabled for player 2

var playerScore = [0,0];

function setStart() {
    for(i=0; i<2; i++){
        document.querySelectorAll("img")[i].setAttribute("src","css/img/dice-6.jpg");
        document.querySelectorAll(".scores span")[i].innerHTML=0;
        var diceClass = ".btn-" + (i+1) + " a";
        // console.log(diceClass);
        document.querySelector(diceClass).classList.remove("btn-active");
    }
    document.querySelector(".btn-1 a").classList.toggle("btn-active");
    document.querySelector(".btn-1 a").style.display = "block";
    playerScore = [0,0];
}
setStart();

document.querySelector("button").addEventListener("click", setStart);

for (var i = 0; i < 2; i++) {
    document.querySelectorAll(".buttons a")[i].addEventListener("click", turn);
}


function activePlayer(){
    if(playerScore[0] <= 10 && playerScore[1] <= 10) {
        if (document.querySelector(".btn-1 a").classList.contains("btn-active")) {
            document.querySelector(".btn-1 a").style.display = "block";
            document.querySelector(".btn-2 a").style.display = "none";
        } else  {
            document.querySelector(".btn-1 a").style.display = "none";
            document.querySelector(".btn-2 a").style.display = "block";
        }
    } else {
        document.querySelector(".btn-1 a").style.display = "none";
        document.querySelector(".btn-2 a").style.display = "none";
    }
}

function turn() {
    var roll = Math.floor((Math.random()*5) + 1);
    var dice = 0;
    if (document.querySelector(".btn-1 a").classList.contains("btn-active")) {
        dice = 1;
    } else {
        dice = 2;
    }
    document.querySelectorAll("img")[dice-1].setAttribute("src", "css/img/dice-" + roll + ".jpg");
    if(roll !==6 && roll !==1) {
        playerScore[dice-1] = playerScore[dice-1] + roll;
    } else {
        document.querySelector(".btn-1 a").classList.toggle("btn-active");
        document.querySelector(".btn-2 a").classList.toggle("btn-active");
    }   
    document.querySelector('.score-'+ dice + ' span').innerHTML= playerScore[dice-1];
    activePlayer();
}

