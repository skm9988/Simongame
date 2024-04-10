let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress",function(){
    if(started === false){
        console.log("game started");
        started = true;
    }
    levelUp();
})

function buttonflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250)
}

function levelUp(){

    userSeq = [];
     level++;
     h2.innerText = `Level ${level}`;

     //random button choose
     let randomindex = Math.floor(Math.random()*3);
     let randomcolor = btns[randomindex];
     gameSeq.push(randomcolor);
     let randombtn = document.querySelector(`.${randomcolor}`);
     buttonflash(randombtn);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function checkAns(idx){
   
   if(gameSeq[idx] === userSeq[idx]){
           if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
           }
   }
   else{
    h2.innerText = "Game Over Press Any key to Start";
       reset();
   }
}
function buttonpress(){
   let btn = this;
   buttonflash(btn);
   usercolor = btn.getAttribute("id");
   console.log(usercolor);
   userSeq.push(usercolor);


   checkAns(userSeq.length-1);
}
let allbtns = document.querySelectorAll('.btn');
for(let btn of allbtns){
    btn.addEventListener("click",buttonpress)
}


