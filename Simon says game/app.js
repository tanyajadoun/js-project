let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];  //for generating random number for btnflash to choose random button

let started=false; //it show that game have not been started yet
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true; //due to thius game ek hi bar start hoga
        //jese hi game start hojaye to level up ko call krdo
        levelup();
    }
});

function btnflash(btn){
    btnflash.classList.add("flash");  //css mein flash class bnakrr isme add
    setTimeout(function(){
        btn.classList.remove("flash");  //bg 1 sec k liye white hoga or fir usko htadenge or vapis phle vala color ajayega
     },250);
}

function levelup(){
     level++;
    h2.innerText=`level+${level}`;

    //random btn ko choose krega
    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`${randcolor}`); //class bnayi h color ko use krke
    btnflash(randbtn);
}



