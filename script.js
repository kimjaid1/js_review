'use strict'

console.log('hello');

let randomNum = 5; // let locally scoped 
var num = 2; // var locally scoped 
const number = 7; // const globally scoped 

//console.log(randomNum);
//console.log(num);
//console.log(number);

document.write('<h1> Java Script Example</h1>');
document.write('<h2> Second Example</h2>');

//alert('this is an alert message');
//let name = prompt('what is your name')
//console.log(name);


//for loop syntax
// for (statement 1; statement 2; statement 3;)
// statement 1 where you a re starting the for most of the time it will be let i=0
// statement 2 is the condition you want to run through ex. 1<10
//statement 3 is how often you execute the command ex. i++

for(let i=0; i<10; i++){
    console.log(i)
}

let add = function add(numb1, numb2){
document.write(numb1 + numb2)
}
add(6,5);