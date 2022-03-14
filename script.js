//document.write("Prashant")
//console.log("this is test");
/*console.log(document.getElementById("change").innerHTML);
document.getElementById("change").innerHTML=10;*/
 
 /*var Prashant12= " I love coding<br>";
 Prashant12="i love you baby"
document.write(Prashant12);*/
/*var test = 10;
if( test == 1){
    document.write("The value is one");
}
else if( test == 2){
    document.write("The value is two");
}
else if( test == 3){
    document.write("The value is three");
}
else if( test == 4){
    document.write("The value is four");
}
else if( test == 5){
    document.write("The value is five");
}
else if( test == 6){
    document.write("The value is six");
}
else if( test == 7){
    document.write("The value is seven");
}
else if( test == 8){
    document.write("The value is eight");
}
else if( test == 9){
    document.write("The value is nine");
}
else if( test == 10){
    document.write("The value is ten");
}

else{
    document.write("The value is  b/w  other than 1 & 10");
}
var x= 5;
var number=--x;

// Arthematic operator
console.log(number);
var happy=15;
var sad= 25;
var prashant= happy+sad;
console.log(prashant);
var x=5;
x+=5;
var y=50;
y=y+50;
console.log(x);
console.log(y);
var myfname="Prashant ";
myfname+="kumar "
console.log(myfname); 
var mynum=15+5;
var mynum2="15"+5;
var mynum3="test"+5;
console.log(mynum);
console.log(mynum2);
console.log(mynum3);
var mynumber=1;
while(mynumber<5){
    document.write("Hello world <br>")
    mynumber=mynumber+1;
} 
 //while loop
var mynumber=10;
while(mynumber<=10){
    document.write(mynumber+"Hello world <br>")
    mynumber=mynumber+1;
}
// do while loop
var number=15;
do{
    document.write("Hello world <br>");
    number=number+1;
}
while(number<=10)
// for loop

for( var number=1;number<=10; number++){
    document.write(number+"hello world <br>");
}
var mylist=["item1","item2", "item3","item4","item5" ];
document.write(mylist +"<br>");
var my_list=["item1","item2", "item3","item4","item5" ];
for(a=0;a<5;a++){
document.write(my_list[a]+"<br>");
}
// reverse of s astring
//Var const let
var name="Prashant"
var channel;
channel='prashant.com';
channel="codewith harry"
var marks='34';
marks="0"
var city='delhi';
console.log(name, channel, marks,city);
const ownersName="Hari ram";
//ownersName='Harry' (can not do this)
console.log(ownersName);
const fruit="Orange";
{
    let city="Rampur"
   city="kolkata"
   console.log(city);
}
console.log(city);
const arr1=[12,23,12,3,35];
arr1.push(4);
//arr1=[34,23,23];
console.log(arr1);
// Primitive data type
//String
let name="Prashant";
console.log("my string is "+  name);
console.log('Data type is' + (typeof name));
// Numbers
let  marks =50;
console.log(marks);
console.log("Data type is" + (typeof marks));
// booleaan
let isdriver=true;
console.log('Data type is' + (typeof isdriver));
let prashant=null;
console.log("Data type is"+ (typeof prashant))
let undef=undefined;
console.log("Data type is"+ (typeof undef))
//Reference Data types
myarr=[1,2,3,4,false,"string"];
console.log("Data type is"+ (typeof myarr));
//objects literals
let stmarks={
    marry:89,
    subham:37,
    rahul:49,
}
console.log(stmarks);
function findname() {
    
}
console.log( typeof findname);
let date= new Date();
console.log(typeof date);
// Type of conversion and type of coersion
console.log('welcome to here');
let myvar;
myvar= String(34);
//myvar="34";
//console.log(myvar, (typeof myvar));
let booleanvar=String(true);
console.log(booleanvar, (typeof booleanvar));
let date= String(new Date());
console.log(date, (typeof date));
let arr= String([1,4,7,9,10,15]);
console.log(arr.length, (typeof arr));
let i=45;
console.log(i.toString());
let stri=Number('34d35');
stri=Number(false);
console.log(stri, (typeof stri));
let number=parseInt("34") 
console.log(number, (typeof number));
//Type of coersion
let mystr=Number("657");
let mynum= 45;
console.log(mystr + mynum);
// if else condition;
const age='40';
if(age==19){
    console.log("age is 19")
}
else if(age==64){
    console.log("age is 65")
}
else if(age==30){
    console.log("age is b/w 19 to 65")

}
else{
    console.log("age is greater than 65")
} 
// GenerL loops: FOR ,WHILE,DO-WHILE
for(let i=0; i<100; i++){
    console.log(i);
} 
let a=34;
a+=1;
a++;
console.log(a)
for(let i=0; i<100;i++){

console.log(i);
}
let j=0;
while(j<10){
    console.log(j+1);
    j+=1;
}
// Break and Continue
let k=0;
do{
   if(k===2){
      continue;  
    }
    console.log(k+1);
    
    k+=1;

}while(k<8);
console.log('done');
let arr=[2,4,8,5,3,5];
arr.forEach(function (element){
    console.log(element);
});
let obj={
    name: "Prashant bhagat",
    age: 23,
    type: "frontend developer",
    os: "ubuntu"
}
for(let key in obj){
console.log( obj[key]);
}
const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);

function myfunction (num){
    return num*=2
}
function include(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == obj) return true;
  }
}

console.log(include([1, 2, 3, 4], 3)); // true
console.log(include([1, 2, 3, 4], 6)); // undefined
function hello() {
    console.log("hey prashant");
}
hello();
let myFunction = (a, b) => a * b; 
document.getElementById("demo").innerHTML = myFunction(4, 5);
Function in javascript
function greet(name,thank='thanks so much'){
    let msg=`Wish you a very very happy birthday dear ${name} ${thank}!`;
    return msg;

}
//let name='skillf';
let name='rohan';
let val= greet(name);
console.log(val);
const mygreet = function(name,thank){
    let msg=` Wish you a very very  happy birthday dear ${name}  ${thank}`

return msg;
}
let val=mygreet("Rahul", "thanks a lot");
 console.log(val);
 function name(){
     console.log(`baby prashnat come your room`);
     
 }
 name();
 const myobj1={
     name:"Prashnat Bhagat",
     game: function(){
         return "GTA";
     }
 }
 console.log(myobj1.game());
 arr=["fruit", "vegetable","Furniture"];
 arr.forEach(function(element,index,array)  {
     console.log(element,index,array)
      });
         if (1){
     var i=324;
        console.log(i);
    }
    
    console.log(i);
    function ab(name){
       let i =123;
        console.log(i);
        return `this is a ${name} kumar`;
    }
    console.log(ab("Prashnat"),i);
    //DOM
    let a=window.document;
    //alert("hello babu");
    //a=prompt("this is destroy your computer.Type your name");
    //a=confirm('are you sure you want to delete this page')
    //a=window.innerHeight;
    //a=window.innerWidth;
    a=scrollX;
    a=screenY;
    a=location.toString;
    a=window.history;
    console.log(a);*/
    let a=document;
    a=document.all;
    a=document.body;
   // a=document.forms;
    console.log(a);
   
     







     





