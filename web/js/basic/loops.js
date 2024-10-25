//for loop
for(let step=0;step < 5; step++){
    console.log("walking east one step");
}

//while loop

let n = 0;
let x = 0;

while(n < 3){
    n++;
    x +=n;
    console.log(x);
}

//do while
let i = 0;
do{
    i += 1;
    console.log("value of i",i);
}while(i < 5);

function greet(name){
    console.log('hello ,${name}');
}
greet("anandu");

const greet2 = function(name){
    console.log('hello',name);

}
greet2("peter");

const greet3 = (name)=>{
    console.log('hello',name);
    }
    greet3("kunja");
var str = "hello world";
var num = 123;
var bool = true;
var nullvar = null;
var undefvar = undefined;
var Bigint = 12234324235346546754367467846787674356422342315n;
var sym = Symbol("hello world");
var obj = { name : "john", age:30};
var arr = [1,2,3,4,5];
console.log(str);   
console.log(num);   
console.log(bool);   
console.log(nullvar);   
console.log(undefvar);   
console.log(Bigint);   
console.log(sym);
console.log(obj);
console.log(arr);         
let fruits = ["Apple","bannana","cherry"];
console.log(fruits);
fruits.push("grapes");
console.log("after push",fruits);
fruits.unshift("pineapple");
console.log("after unshift",fruits);
fruits.pop();
console.log("after pop",fruits);
fruits.shift();
console.log("after shift",fruits);
console.log(` banna position : ${fruits.indexOf("bannana")}`);
console.log(`array length : ${fruits.length}`);
fruits.unshift("jack-fruit");
console.log("after unshift",fruits);
console.log(`after slicing ${fruits.slice(0,2)}`);
