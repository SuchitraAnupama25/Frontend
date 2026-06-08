/*

setTimeout(() => {
    console.log("set timeout");
}, 5000);

setInterval(() => {
    console.log("hello interval");
}, 2000);

*/

function one() {
    setTimeout(() => {
        console.log("in function one");
    }, 3000);
}

function two() {
    setTimeout(() => {
        console.log("in function two");
    }, 1500);
}

one();
two();