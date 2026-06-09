/*

setTimeout(() => {
    console.log("set timeout");
}, 5000);

setInterval(() => {
    console.log("hello interval");
}, 2000);

*/

//Callback: Callback is a func passed as an argument to another function and it is executed later 
//or executed after current func is finished.

function one() {
    setTimeout(() => {
        console.log("in function one");
    }, 3000);
}

function two() {//Async Programming
    setTimeout(() => {
        console.log("in function two");
    }, 1500);
}

one();
two();