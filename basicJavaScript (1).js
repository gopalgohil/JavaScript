 /*JS Devloped by brendan eich
 What is Java Script?
 JS is the Programming Langugage for the Web.
 it is most popular programming lanugugage. it is easy to learn.*/

// 1 print in JS
/*console.log("this is me");
 alert("me");
document.write("this is document write")
 console.warn("this is warning");
console.log("hello", 10 + 5, "by");*/

// 2 JS Console API
/*console.log("this is log");
console.error("this is error");
console.warn("this is warning");*/
/*single line is used to read the code can't run the code*/
// single line comment(//) 2. multiline comment(/*  */);

/* var: variable  can be redeclared  and update. global scope variable.
let : variable can't be redeclared but can update. block scope variable.
const: variable can't be redeclared or update. block scope variable.
*/
/*
let name="gopal";
let age=24;
// let age=25;  error because let variable can't redclared
var roll=101;
// var roll=102; can be redclared
console.log(roll)
const pi=3.14;
// pi=3.17;    can't update
console.log(pi);*/

// 3 JS Variable
// it is container that store data value.
/*var num1=34;
var num2=32;
console.log(num1+num2);*/
/*
4.data type in JavaScript:

There are two type of data :
1.primtive data:undefined,null,number,string,boolean,symbol
2.Reference data type(non-primtive) : Array and objects
*/
/*var str1="This is string";
var str2="this is string 2";
console.log(str1+" "+str2);

var marks={
    ravi:34,
    gopal:95,
}
*/
/*
let a1={
    name:"gopal",
    section:1
}
a1["rollNo"]=101;
 a1["friend"]="jaynit";
  a1["name"]="vishal";
console.log(JSON.stringify(a1))
*/
// console.log(marks)
/*
var num=20;
var num3=10;
console.log(num==num3);*/ //output:false
//  object
/*
let std={
    firstName:"gopal",
    rollNo:101,
    age:18
}
std["rollNo"]=std["rollNo"]+2
console.log(std["rollNo"])*/
/*  Array: Array is collection of similiar datatype.
There are Two Type Of Array : 1.single Dimansinal Array
                              2.multiDimansinal Array */

//var arr=[1,2,7,3,6,6];
//console.log(arr);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[5]);

//array method
// let arr=["fan","camera",34,null,true];
// console.log(arr.length)
// arr.pop();
// arr.push("gopal")
// arr.shift()     first element delete thay
// arr.unshift(34)      array ma agd avi jay
// arr.toString()
// arr.sort()
// console.log(arr)
/*
accending order to store number
let compare=function(a,b){
    return a-b;
}
let arr=[56,7,1,2,255,6,55,89];
let a=arr.sort(compare);
console.log(a);*/

// Operator in javaScript
/*    1.Arithmetic operator
       2. Assigenment operator
       3.comparisson operator
       4.Logical operator*/
/* 1.Arithmetic operator
var a=34;
var b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
*/
// 2. Assigenment operatior
/*var a=10;
var b=10;
var c=10;
a+=20;
b*=20;
c-=20;
console.log(a)
console.log(b)
console.log(c)
*/

/*var a=20;
//  3. comparisson Operator
var b=20;
console.log(a==b)
console.log(a>b)
console.log(a<b)
console.log(a>s=b)
console.log(a<=b)
*/

// 4. logical opertor
//logical not ,or,and
//  This code check the user value null or not null
/*
let firstName=prompt("please Enter The Value");
if(firstName !=""){
    alert("not null")
}
else{
    alert("null")
}*/

// console.log(true||false);
// console.log(true&&false);

//  6. Function : function is block of code it is one is created and it is call many time(again and again)

/*function avg(a,b){
    return (a+b)/2;
}
c=avg(10,2);
console.log(c)*/
/*function mul(a,b){
    c=a*b;
    return c;
}
c1=mul(12,12);
console.log(c1)*/

/* 7.conditional statement in JS
   1.if statement
   2.if-else statement
   3.else-if statement
*/
/*
var age=8;
if(age>18){
    console.log("you are not kid")
}
else{
    console.log("you are kid")
}*/
/*var age=30;
if(age<20){
    console.log("you are young");
}
else if(age>20){
    console.log("you are old");
}*/
/*
let a=prompt("what is your age");
console.log(typeof a)*/
// var arr=[1,2,3,4,6,78]

/* Loop in JavaScript:
      1.for loop
      2.while loop
      3.do while loop
      4.for of loop
      5.for in loop
      6.for each loop
*/
//  1.for loop
/*console.log(arr)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}*/
/*
let sum=0;
let n=prompt("Enter you age");
for(let i=0;i<n;i++){
    sum+=i;
    console.log(sum)
}
*/
//   2.for each
/*arr.forEach(function(element){
    console.log(element)
})*/
//    3.for in loop
/*
let marks={
    jay:45,
    gopal:90,
    sharad:55,}
for(let key in marks){
    console.log(key+" "+marks[key])

}*/
/*
let obj={
    harry:90,
    shubh:45,
    ritika:49,
}
for(let a in obj){
    console.log(a);
    console.log(obj[a]);
}*/
//  4. for of loop
/*
let name="gopal";
let size=0;
for(let val of name){
    console.log(val)
    size++;
}
console.log("Size Of  Name :",size);*/

/*
let a=10;
let b=20;
function sum(a,b){
    return a+b;
}
console.log(sum (a,b))*/
/*
//for loop
let marks={
    jay:45,
    gopal:90,
    sharad:55,
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log(Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
}*/
/*
//  for in loop object ni key access krva use thay
// let std={
//     name:"gopal",
//     cgpa:8.6,
//     age:20
// }
// for(let val in std){
//     console.log(std[val])
// }
//  5.While loop
while(i<arr.length){
    console.log(arr[i]);
    i++;
}*/
// 6.do while
/*
let i=0;
do{
console.log(arr[i]);
i++;
}
while(i<arr.length);
*/

// Template literal
/*
let boy1="gopal";
let boy2="jay";
let set=`${boy2} is a friend of ${boy1}`;
console.log(set)*/
/*
// 1.concat method
let name1="gopal";
let name2="jay";
console.log(name1.concat(" of ",name2))*/
/*
2.slice method:
let a="please give Rs 1000";
console.log(a.slice("please give Rs".length));
//     or
console.log(a.slice(14,19))
//  or
console.log(a.slice(15))
*/
//while loop
/*let i=0;

// break and continue
/*var arr=[1,2,3,4,5,6,7,8,9,10]
for(var i=0;i<10;i++){
    if(i==2){
        continue;
    }
    console.log(arr[i])
}
var arr=[1,2,3,4,5,6,7,8,9,10]
for(var i=0;i<10;i++){
    if(i==2){
        continue;
    }
    console.log(arr[i])
}*/
//  For of  Loop

// let item=[250,645,300,900,50];
// let i=0;
/*
for(let el of item){
    let offer= el/10;
    item[i]=item[i]-offer;
    console.log("Value After offer"+item[i])
    i++;
}*/
//  for  loop simple
/*
for(let i=0;i<item.length;i++){
    let offer= item[i]/10;
    item[i] -=offer;
}
console.log(item)
*/

// splice and slice
/*
let a=[12,45,67,89,79,45,44,23];
a.splice(3,2,101,102);  // 3 is postion to add number and 2 is number of element to remove
console.log(a);*/

// slice :orignal Array not modify and newArray create then change the slice
/*
let arr=[1,2,3,4,5];
let newArr=arr.slice(1)
console.log(newArr);*/
// Square of array element
/*
let arr=[1,2,3,4,5,6,7];
arr.forEach(function(e){
    console.log(e*e);
})*/

// Map is used to create a new array(index,array are option part);
/*  1.map
    2.reduce
    3.filter
*/
/*
let arr=[45,23,22];
let a=arr.map(function(value,index,array) {
    console.log(value,index,array);
    return value+1;
})
console.log(a);*/

// Array filter method
// it is used to a<10  10 thi nana jetla elemnt hse te print thai jase
/*
let arr=[12,34,56,67,88,8,7,6];
let a=arr.filter(function(a){
    return a<10;
})
console.log(a)*/
//  write a program std mark 90+
/*
let mark=[30,40,91,92,90,95];
let newMark=mark.filter((e)=>{
  return e>90;
})
console.log(newMark);*/

//  write a program using reduce method sum of number
/*
let number=prompt("Enter the number");
let arr=[];
for(let i=1;i<=number;i++){
    arr[i-1]=i;
}
console.log(arr)
let sum=arr.reduce((e1,e2)=>{
    return e1+e2;
})
console.log("sum of Number :",sum)*/

//  factorial using reduce method
/*
let n=prompt("Enter The Number");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
let factorial=arr.reduce((e1,e2)=>{
    return e1*e2;
})
console.log("Factorial of Array  :"+factorial)*/
//function nī method to reduce method (1+2=3,3+3=6,6+5=11,11+2=13,13+1=14)
/*let arr=[1,2,3,5,2,1];
let fun=function(h1,h2){
    return h1+h2;
}
let newarr=arr.reduce(fun);
console.log(newarr)*/
/*
let a=[1,2,3];
let n=prompt("Enter ");
 n=parseInt(n);
 a.push(n);
 console.log(a)*/
 /*
let arr=[1,2,3,4,5];
let a;
do{
    a=prompt("enter the nume :");
    a=Number.parseInt(a);
    arr.push(a);
}while(a!=0);
console.log(arr);*/
/*

// Array.form is used to create a array in object
/*
let name_1="gopal gohel";
let newNameAraay=Array.from(name_1);
console.log(newNameAraay);*/

// String method
//let string="hello gopal";
// console.log(string.length)
// console.log(string.indexOf("gopal"))
// console.log()
//console.log(string.slice(0,3))
//d=string.replace("hello","jay");
//console.log(d)

// date method
/*
let myDate=new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());
**/
/*
});*/
// DOM ---> Document Object Model
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