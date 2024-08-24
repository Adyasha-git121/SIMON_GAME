let gameSeq =[];
let userSeq =[];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

let btns = ["red","yellow","green","purple"];

document.addEventListener("click", function(){
   if(started == false) {
    console.log("game is started");
    started = true;
    levelUp();
   }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");   
    },125);
}

    function userFlash(btn) {
        btn.classList.add("userflash");
        setTimeout(function() {
            btn.classList.remove("userflash");   
        },125);

}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;


    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    /*console.log(randIdx);
    console.log(randBtn);
    console.log(randColor);*/
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}


function checkAns(idx) {
    
   // console.log("curr level:",level);
  

   if(userSeq[idx]==gameSeq[idx]) {
    //console.log("same value");
    if(userSeq.length == gameSeq.length) {
        setTimeout(levelUp,1000);
    }
   } else {
    h2.innerHTML = `Game over! your score was <b>${level}<b> <br> Press any key to restart.`;
    document.querySelector("body").style.backgroundcolor = "red";
    setTimeout(function() {
        document.querySelector("body").style.backgroundcolor = "white";
    },4000);
   reset();
   }
}

function btnPress() {
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   //console.log(userColor);
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

/*function reset()  {
    started = false;
    gameSeq=[];
    userSeq=[];
    level = 0;
}*/



