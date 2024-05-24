//DOM ---> Document Object Model
/*
let elem=document.getElementsByClassName("main")
console.log(elem);
elem[0].style.background="yellow";
let elem1=document.getElementById("first")
console.log(elem1);
elem[1].style.background="black";*/
/*
let btn=document.getElementById('btn')
console.log(btn)
let elmclass=document.getElementsByClassName('main')
elmclass[0].innerHTML
console.log(elmclass);
// elmclass[0].style.backgroundColor="yellow";
// elmclass[0].classList.add("gopal");//new clas add thay
elmclass[0].classList.add("text-sucseesor");
// elmclass[0].classList.remove("text-sucseesor");//class text-sucessor remove
*/

/*let arr=[1,2,3,50,30,40];
arr.filter(function(x){
    return x%10==0;
})
console.log(arr)*/

//  array element convert square
/*
let arr=[1,2,3,4,5,6,7,8];
let n=arr.map(function(x){
    return x*x;
})
console.log(n)*/
// Create table using table() method obj.table()
/*
obj={a:1,b:2,c:3};
console.table(obj)*/

// matches,closest,contains
/*
let id1=document.getElementById("id1");
let s1=document.getElementById("s1");
console.log(id1);
console.log(id1.matches(".class"));//false
console.log(id1.matches('.box'));//true
console.log(s1.closest("#s1"));// potani id return tase
console.log(s1.closest(".box"));
console.log(id1.contains(s1))
*//*
let a=document.getElementsByTagName('nav')[0].firstElementChild.style.color="red";
document.getElementsByTagName('nav')[0].lastElementChild.style.color="blue";
Array.from(document.getElementsByTagName('li')).forEach((element) => {
    element.style.background="red";
});*/
// innerHTML  and outerHTML
/*
id1.innerHTML
'<b>this is a id 1</b> <span id="s1"></span>'
id1.innerHTML="hello i am gopal gohel"
'hello i am gopal gohel'
id1.outerHTML
'<div class="box" id="id1">hello i am gopal gohel</div>'
id1.outerHTML
'<div class="box" id="id1">hello i am gopal gohel</div>'
id1.outerHTML="<div>hey</div>"
'<div>hey</div>'*/
// console.log(document.body.textContent)

// hidden
/*id2.hidden=false
false*/
/*
    let img1=document.querySelector('#img-1');
    img1.addEventListener("click",function(){
        if(img1.src.match("front.png")){
            img1.src="g-pay.png"
        }
        else{
            img1.src="login.png"
        }
    })*/

/*alert("gopal")

//   Switch Case using javaScript
let a= prompt("Enter the number :");
a=parseInt(a);
let b=prompt("Enter the number :");
b=parseInt(b);

let c=prompt("Enter the Character(+,-,*) :");

switch(c){
    case '+': let result=a+b;
    alert(a+b);
    break;
    case '-': let result1=a+b;
    alert(a-b);
    break;
    case '*': let result2=a+b;
    alert(a*b);
    break;
}*/
//  SetTimeOut Function
/*
let a=setTimeout(function(){
    alert("I am inside the setTimeOut");
},3000)
let b=prompt("Enter the number");
if("n"==b){
    clearTimeout(a)
}
console.log(a)*/
/*
const sum=(a,b)=>{
    console.log("This is the runing"+(a+b));
}
setTimeout(sum,2000,1,4)
// SetInterval Function
setInterval(function(){
    alert("Hello world");
},4000)
*/
// addEventListner and removeEventListner
/*
let x= btn.addEventListener('click',function(e){
    console.log(e)
    alert('hello_1')
})
let y= btn.addEventListener('click',function(e){
    console.log(e)
    alert('hello_2')
})

let a=prompt("enter the");
if(a=="2"){
    btn.removeEventListener('click',x)
}*/

// Target in javascript
/*
let x = function (e) {
    console.log(e.target);
    console.log(e.type, e.clientX, e.clientY)
    alert("hello");
}

btn.addEventListener('click', x)
*/

// regular Expression
/*
let reg=/harry/;/*   //this is regular expression  litteral in javascript
reg=/harry/g;  // g means global
 reg=/harry/i; // i means case insensitive
console.log(reg)
console.log(reg.source);
// 1 exec()
let s="This is great code with harry";
let result=reg.exec(s);
// console.log(result)
// console.log(result.index)
result=reg.exec(s);
console.log(result)*/

// 2 test()--- returns true or false

/*

let reg = /gopal/;
let str = "how are you gopal";
let result = reg.test(str);
console.log(result)
*/

// 3 match()- it will return an array of result or null
/*
let reg= /gopal/;
reg= /gopal/g;
let s="this is  the gopal gopal gohel";
// let result=reg.match()   this is wrong method

let result=s.match(reg);// this is right
console.log(result)
*/

// 4 search()- return index of first mastch else-1
/*
let reg= /gopal/;

let s="this is  the gopal  gohel";
// let result=reg.match(s)   this is wrong method

let result=s.search(reg);// this is right
console.log(result)

*/

//5  replace()-- return the new replace string
/*
let reg= /gopal/g;

let s="this is  the gopal  gohel gopal";
// let result=reg.match()   this is wrong method

let result=s.replace(reg,'jaynit');// this is right
console.log(result)
*/
//  write a javascript code vowel sound
/*

let vowel=/[aeiou]/gi;
let string_1="geeks for geeky";
let result = string_1.match(vowel);
console.log(result)

*/
// program to count the number of vowels in a string

// function method
/*
function count(str){
    
    let vowle=/[aeiou]/gi;
    let count=str.match(vowle).length;
    return count;
}
let str=prompt("enter");
let result=count(str);
console.log(result)
*/

// callback in javascript
/*
function display(some) {
    document.getElementById("demo").innerHTML = some;
  }
function myFirst(){
      display("hello");
}
function mySecond(){
    display("Goodbye");
}

myFirst();
mySecond();*/
//  Synchronus:
/*
console.log("first");
console.log("second");
console.log("third")
*/

//  Asynchronus
/*
console.log("first")
setTimeout(()=>{
console.log("seconsd")
},2000)*/


// callback example
/*
function sum(a,b){
    console.log(a+b);
}
function calculate(a,b,sum){
    sum(a,b);
}
calculate(1,2,sum)    // sum() can't right this way
*/
//  second rit ()=>{} erro function
/*
function sum(a,b){
    console.log(a+b);
}
function calculate(a,b,sum){
    sum(a,b);
}
calculate(1,2,(a,b)=>{
    console.log(a+b);
})*/

//  Callback Hell
// it is a nested callback stacked below one another forming a pyramind structure

//nested if-else
/*
let age=8;
if(age>=18){
    if(age>=60){
        console.log("senior");
    }
    else{
        console.log("middle");
    }
}
else{
    console.log("child");
}*/
// Nested loop
/*
for(let i=0;i<5;i++){
    let str="";
    for(let j=0;j<5;j++){
        str=str+j;
    }
    console.log(i,str);
}*/
// callback Hell Example
/*
function  getData(dataid,getNextData){
   setTimeout(()=>{
    console.log("data "+dataid)
    if(getNextData){
        getNextData();
    }
   },2000)
}
getData(300,()=>{
    getData(400,()=>{
        getData(500);
    });s

});*/
// Promises:
//  it is "eventual" completion of task. it is an object in js.
//  it is a solution to callback hell

//  syntaxt  let promise=new promise((resolve,reject)=>{..})
/*
        let  promise=new Promise((resolve,reject)=>{
            // resolve("success");
            reject("some error")
             console.log(Promise)
        })*/

// async and await simple exmple imp
/* 
  function hello(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weathrt data");
            resolve(200)
        },3000)
    })

}
async function getWe(){
    await hello();     // 1st time call
    await hello()     // 2st time call
}console.log(getWe())*/
/*
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dataId);
            resolve("sucess");
        },2000)
    })
}
async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
}
console.log(getAllData())
*/

//    API: application programing interface
//  API: provide an interface for fetching resources.
// it is used request and response object;

//  let promise=fetch(url,[option])
/*
let div=document.querySelector("div");
console.log(div)
 let id=div.getAttribute("id");// getAttribute is used to get the id and class given tag
 console.log(id)
 let name=div.getAttribute("name");
 console.log(name)
 let para=document.querySelector("p");
 console.log(para.setAttribute("class","don"))// setAttribute is used  to set(change) the className 
*/
/*
let div=document.querySelector("#box");
let btn=document.createElement("button");
console.log(btn.innerText="click");
let heading=document.createElement("h1");
heading.innerHTML="Gopal Gopal";
document.querySelector("body").prepend(heading);*/
// heading.remove();   //it is used to delete he node,heading etc 

// div.append(btn)      // Last ma add inside div
// div.prepend(btn)     // before add inside div
// div.before(btn)      //outside the div before
// div.after(btn)       // outside the div after 
 /*
let body=document.querySelector("body");
let btn=document.createElement("button");

btn.innerText="Click";
body.prepend(btn);

btn.addEventListener("click",()=>{
    body.style.background="red";
    body.style.color="white";

})*/