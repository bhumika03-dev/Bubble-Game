const game=document.querySelector('.game');

function makeBubble(){
game.innerHTML = "";
for(let i=1;i<=130;i++){
 const bubble=document.createElement("div");
 bubble.classList.add("circle");
 bubble.textContent= Math.floor(Math.random()*10);
 game.appendChild(bubble);
}
}
makeBubble();
var timer=60;
var gameOver=false;
function runTimer(){   
var timerint=setInterval(function(){
        if(timer > 0){
       timer--;
        document.querySelector('.time').textContent=`Time : `+timer;
        }
        else{
clearInterval(timerint);
gameOver=true;
prompt("Game over");
        }
    },1000);
}
runTimer();
    var rn=Math.floor(Math.random()*10);

var hit=document.querySelector('.hit');
function hitBubble(){
    hit.textContent=`Hit : ${rn}`;
}
hitBubble();

var score=0;
function increaseScore(){
    score+=10;
    document.querySelector('.Hscore').textContent=`High Score: ${score}`;
}

document.querySelector('.game').addEventListener("click",function(dets){
    if(gameOver){
        return;
    }
    var Clickednum= Number(dets.target.textContent);
    if (Clickednum===rn){
      increaseScore();
      makeBubble();
      rn=Math.floor(Math.random()*10);
      hitBubble();
    }
});
