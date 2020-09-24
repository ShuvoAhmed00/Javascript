var xxx = "Shuvo";
console.log(xxx);
console.log(7+7);

let opps;
opps = 'Shuvo++';
console.log(opps);

const ggg = 55;
const yyy = 5;
console.log(ggg);
console.log(yyy);
console.log(ggg-yyy);

var df;
df = true;
console.log(typeof df);

var x;
var y = 5;
x = ++y;
console.log(x);

let m;
let n = 10;
m=--n
console.log(n);


var mx = 10;

if(mx>5){
console.log("This Number",mx,"is Greater Than 5");
} else{
    console.log("This Number",mx,"is Smaller Than 5");
}


var q = 19;
var result;
result=(q>5) ? "Valo":"kharap";
console.log(result);

var relation1 =  "Shuvo";
var relation2 =  "Shital";
var aretheybrother = true;

if("Shuvo"==relation1){
    if("Shital"== relation2){
        if(aretheybrother==false){
            console.log("Yes,,,,,,they are Brothers");  
        }else{
            console.log("Nope,,,,,they are Not Brothers"); 
        }
    }
}


var sgh = String(new Date());
console.log(sgh);

var i = 10;
while(i-->0){
   console.log(i);
}

while(i<20){
  i++;
  console.log(i);
  
}

 i=10;
do{
    console.log(i);
    i++
     
}while(i<=33)

var j = 5;
while(j<40){
   console.log(j);
   j++;  
}


for(var p = 10; p<55;p++){
    if(p===40)continue; 
    console.log(p); 
      
}


var myArray = ["One","Two","Three","Four","Five","Six"];

// for(var i = myArray.length-1; i>=0; i--){
//     console.log(myArray[i]);
// }

var w = 10;
while(w>0){
    console.log(w); 
    w--; 
}

var fruit = ["Mango","Lichu","Anaros","Sobeda","Narkel"];        //array

console.log(fruit[1] + fruit[3]);
console.log(fruit);
fruit.push("Kola");
console.log(fruit);


const arrayy = [10,20,30,40]
arrayy.push(50)
arrayy.unshift(05)
console.log(arrayy);
arrayy.pop()
arrayy.shift()
console.log(arrayy); 

var swg;
swg = 10101010;
swg = toString(swg);
console.log(typeof(swg));
console.log(swg);
 
var number = 3.5789;
console.log(number.toFixed(2));
console.log(number.toPrecision(4));

var firstName = " David";
var lastName = " Warner";
var fullName = firstName + lastName;

console.log("My Name is" + fullName);

var num1 = 20;
var num2 = 30;
console.log("Num1 is "+num1+" Num2 is "+num2);

var text = "Bangladesh";
var len = text.length;
console.log(len);
console.log("Number of Character "+text.length);

/*
var text1 = prompt("Enter a Character");
var len2 = text1.length;
console.log(text1+" has "+len2+" Character");
console.log(text1.toUpperCase());
/*

/*
var firstName1 = prompt("Enter Your First Name :");
var lastName1 = prompt("Enter your Last Name :");
var fullName1 = firstName1+lastName1;
console.log(fullName1);
console.log(fullName1.length);
console.log(fullName1.toUpperCase());
var slice = fullName1.slice(2,3);
console.log(slice);
*/

console.log(2**3);

var q = 5;
q += 5;
console.log(q);

var q = 5;
q -= 4;
console.log(q);

var q = 5;
q *= 5;
console.log(q);

var q = 10;
q /= 5;
console.log(q);

var q = 10;
q %= 5;
console.log(q);

/*
var task1 = prompt("Enter First Number : ");
var task2 = prompt("Enter Second Number : ");

 var task1 = parseInt(task1,10);
 var task2 = parseInt(task2,10);

 var add = task1+task2;
 var sub = task1-task2;
 var mul = task1*task2;
 var div = task1/task2;
 var vagsesh = task1%task2;
 console.log("Jog is "+add);
 console.log("Biyog is "+sub);
 console.log("Gun is "+mul);
 console.log("Vag is "+div);
 console.log("Vagsesh is "+vagsesh);
*/

/*
var base = prompt("Enter Base Size : ");
var height = prompt("Enter Height Size : ");
var area = base * height;

document.write("Your Area is "+area);
*/


/*
var farn = prompt("Enter Fahrenheit = ");
var cels = (farn - 32) * (5/9);

document.write("Your Celcious is "+ cels);
*/

/*
var cels = prompt("Enter Celcious = ");
var farn = (cels * (9/5))+32;

document.write("Your Fahrenheit is "+ farn);
*/


var cheak = 5;
if(cheak%2==0){
    console.log("This Number is Even");  
}else{
    console.log("This Number is Odd"); 
}

var cheak2 = 0;
if(cheak2>0){
    console.log("Positive");
}else if(cheak2<0){
     console.log("Negative");
}else{
    console.log("ZERO");
}

/*
var grade = prompt("Enter Your Marks : ");

if(grade>=80 && grade<=100){
    console.log("You Got An  A+");
}else if(grade>=70 && grade<80){
    console.log("You Got An A");
}else if(grade>=60 && grade<70){
   console.log("You Got An A-");
}else if(grade>=50 && grade<60){
console.log("You Got  B");
}else if(grade>=40 && grade<50){
    console.log("You Got B-");
}else if(grade>=33 && grade<40){
    console.log("You Got C");
}else if(grade>100 || grade<0){
    console.log("Invalid Input");
}else{
    console.log("You are Failed....Bro");
    }
*/

/*
var letter = prompt("Enter Your Leter");
letter = letter.toUpperCase();

if(letter=="A" || letter=="E" ||letter=="I" || letter=="O" ||letter=="U"){
 console.log("This is A Vowel");
}else{
    console.log("This is a Consonent");
}
*/

/*
var letter = prompt("Enter Your Leter");
letter = letter.toUpperCase();
switch(letter){
    case "A":
        console.log("This is A Vowel");
        break;
    case "E":
            console.log("This is A Vowel");
            break;  
    case "I":
            console.log("This is A Vowel");
            break;
    case "O":
            console.log("This is A Vowel");
            break;
    case "U":
            console.log("This is A Vowel");
             break;                       
      default:
        console.log("This is a Consonent");
} 
*/

/*
var letterr = prompt("Enter Your Leter");
letterr = letterr.toUpperCase();
switch(letterr){
    case "A":      
    case "E":           
    case "I":          
    case "O":           
    case "U":     
        console.log("This is A Vowel"); 
        break;                        
    default:
        console.log("This is a Consonent");
} 
*/


for(var x=1; x<=10; x++){
    console.log("Shuvo Ahmed");
}

for(var x=1; x<=10; x++){
    console.log(""+x);
}



var sum = 0;
for(var x = 1; x <= 10; x++){
    sum = sum + x;
} 
console.log(sum);


var student1 = {
    name : "Shuvo",
    age : 18,
    roll : 55,
    lang : ["English","Bangla","Hindi"]
};

var student2 = {
    name : "Shital",
    age : 19,
    roll : 45,
    lang : ["English","Bangla","Hindi"]
};

var student3 = {
    name : "Nabil",
    age : 20,
    roll : 35,
    lang : ["English","Bangla","Hindi"]
};
console.log(student1.age);
console.log(student1.lang);
console.log(student1.lang[1]);
console.log(student1.name + student1.lang[0]);
console.log(student1.name+student2.name+student3.name);


function student(name,age,roll,lang){
    this.name = name;
    this.age = age;
    this.roll = roll;            
    this.lang = lang;
}

var student11 = new student("Shuvo",18,55,["English","Bangla","Hindi"]);
var student22 = new student("Shital",19,45,["English","Portugese","Hindi"]);
var student33 = new student("Ovi",18,55,["English","Spanish","Hindi"]);

console.log(student11);
console.log(student11.name);
console.log(student33.lang[1]);


function student5(name,age,roll,lang){
    this.name = name;
    this.age = age;
    this.roll = roll;
    this.lang = lang;

    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.roll);
        console.log(this.lang);
    }
}

var student111 = new student5("Shuvo",18,55,["English","Bangla","Hindi"]);
var student222 = new student5("Shital",19,45,["English","Portugese","Hindi"]);
var student333 = new student5("Ovi",18,55,["English","Spanish","Hindi"]);

student111.display();


// var numm1 = parseInt(prompt("Enter Your Frist Number : "));
// var numm2 = parseInt(prompt("Enter Your Second Number : "));

// var maximum = Math.max(numm1,numm2);
// console.log(maximum);


const product = ["Mango",30,5,true];
console.log(product[3]); 

// console.log("ProductName is "+product[0]+"."+ "ProductPrise is "+product[1]+"."+"ProductQuntity is "+product[2]+'.'+"ProductAvailablity is "+product[3]);

console.log(`ProductName is ${product[0]} ProductPrise is ${product[1]} ProductQuantity is ${product[2]} ProductAvailablity is ${product[3]}`);
 


var aobject = {
    ProductName : "7up",
    ProductPrise : 50,
    ProductQuantity : 7,
    ProductAvailable : false
}
console.log(aobject.ProductName);
console.log(`ProductName is ${aobject.ProductName} ProductPrise is ${aobject.ProductPrise} ProductQuantity is ${aobject.ProductQuantity} ProductAvailablity is ${aobject.ProductAvailable}`);
 

function set() {
    console.log("Shuvo");
}
set();
set();
set();


function adder(a,b) {
    console.log(a*b);
}
adder(5,5);
adder(5,7);
adder(5,8);

var as = "Shuvo"; //Global Variable
function supply() {
                  //Local Variable
    console.log("Hello "+as);
}
supply();
console.log(as);

function test(a,b){
  console.log("Hello"+a+b);
}
test(" Shuvo ","Ahmed");

function square(x){
  return (x*x);
}
var  sq = square(4);
console.log(sq);


// Anynyomuus Function
(function (name){
    console.log(name);
})("Suvo"); 

function loop(x){
    if (x<=10) {
        console.log("Opps Its Smaller Than 10");
    }else if(x>=10){
      console.log("Yepp Its Greater Than 10");
    }
}
var chk = loop(20);


var add = function(a,b) {
    return a+b;
}
var minus = function(a,b) {
    return a-b;
}
var mul = function(a,b) {
    return a*b;
}
 function calc(a1,b1,callback) {
      return callback(a1,b1);
}
console.log(calc(10,1,minus));


function greet() {
    console.log("I Love You");
}
function myfunction(callback){
    callback();
}
myfunction(greet);


const tex={
    name : "Shuvo",
    roll : 22,
}

console.log(tex.name);











































/*var input = prompt('Enter Your Name');
alert('Hello,,,' + input + ',,,Welcome To My Website----');
*/


