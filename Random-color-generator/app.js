let btn=document.querySelector("button");

btn.addEventListener("click",function () {
    let h3=document.querySelector("h3");
    let randomColor=getRandomColor();
    h3.innerText=randomColor;   //setting the random color to the first heading

    let div=document.querySelector("div");
    div.style.backgroundColor=randomColor;
});

function getRandomColor() {
    //we have to generate ramdon numbers between 0-255 as it is the range of rgb in rgb colors
    let red=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}
