/*const student={
    fullName:"tanya",
    age:20,
    cgpa:8.6,
    isPass:true,
}; 
console.log(student["age"]);*/
// //arithmetic operator
// let a=5;
// let b=2;
// console.log("a%b=",a%b);
// let c=5;
// let d=2;
// console.log("c**d=",c**d);
// // urinary operator
// let e=5;
// let f=2;

// console.log("++e=",++e,"e++=",e++);
// console.log("++f=",++f,"f++=",f++);


//alert("hello!");//  used for one time popups
//prompt("helllo,what is your name!");//it also gives popups but it takes some input also

//q1.to check the multiple of 5
// let number=prompt("enter a number");
// if (number%5===0){
//     console.log(number,"yes it  is a multiple of 5" );
// }
// else{
//     console.log(number,"no it is not a multiple of 5");
// }

//q2.to print the grades of students acc to their marks
// let score = prompt("Enter the total score out of 100?");
// if(score>=90 && score<=100){
//     console.log("A");
// }
// else if(score>=70 && score<=89){
//     console.log("B");
// }
// else if(score>=60 && score<=69){
//     console.log("c");
// }
// else if(score>=50 && score<=59){
//     console.log("D");
// }
// else{
//     console.log("f");
// }

//for in loop
// 

// for(let num=0;num<=100;num++){
//      if(num%2===0){
//         console.log("num= ",num);
//      }
// }

//create a game where you start with any random game number.ask the user to keep guessing the number until the user enters correct value
// let GameNum=38;
// let guess=prompt("Guess! the number you fool");
// while(guess!=GameNum){
//   guess=prompt("you entered the wrong number.please guess again");
//   if(guess==GameNum){
//     alert("Congratulations you won!!!");
// }
// }
// console.log("Hurray!,you catch the right number and that is ",GameNum);
    
//string practice question
//creating a username from the name entered by the user
// let fullName=prompt("Please enter your Full Name");

// let usrName="@"+fullName+fullName.length;
// alert("Your Username will be "+usrName);
 
//find average marks of entire class
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for (let i=0 ;i<marks.length;i++) {
//   sum+=marks[i];
// }
// let output=`the average marks of entire class is ${sum/marks.length}`;
// console.log(output);

//crete array to store final price after applying offer
// let items=[250,645,300,900,50];
// let i=0;
// for(let val of items){
  
//   let offer=val/10;
//   items[i]= items[i]-offer;
// console.log(`the value after offer is  ${items[i]}`);
// i++;
// }

// const sum=(x,y)=>{
//   let add=x+y;
//   console.log(add);
// }
// sum(1,2);

//countvowels
// function countVowels(str){
//   let count=0;
//   for(const char of str){
//     if(char==="a"||char==="o"||char==="i"||char==="e"||char==="u"){
//       count++;
//     }
//   }
//   console.log(count);
// }
// countVowels("apnacollege");

//square of numbers
// let nums = [1, 2, 3, 4, 5];
// nums.forEach((num)=>{
//  console.log(num*num);
// });

// let marks=[45,76,87,99,91,96];
// let newarr=marks.filter((val)=>{
//   return val>=90;
// });
// console.log(newarr);

// let n=prompt("enter a number for array size");
// let arr=[];
// for(let i=1;i<=n;i++){
//   arr[i-1]=i;
// }
// console.log(arr);
// let sum = arr.reduce((prev,curr)=>{
//   return prev+curr;
// });
// console.log(sum);
// let mul= arr.reduce((prev,curr)=>{
//   return prev*curr;
// });
// console.log(mul);

// let h2=document.querySelector("h2");
// console.dir(h2.innerText);


// h2.innerText=h2.innertext+"from Apna College Students";

// let newbtn= document.createElement("button");
// newbtn.innerText="click me!";
//  newbtn.style.color="white";
//  newbtn.style.backgroundColor="red";
//  document.querySelector("body").prepend(newbtn);
 
let modebtn=document.querySelector("#mode");
let currMode="light";
modebtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        document.body.style.backgroundColor="black";
    }
    else{
        currMode="light" ;
        document.body.style.backgroundColor="white";
    }
    console.log(currMode);
});
