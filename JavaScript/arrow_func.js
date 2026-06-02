const sayHello = () =>{
    console.log("Arrow func check");
}
sayHello();

// const sum = (a,b)=>{
//     return a+b;
// };
const sum = (a,b) => a+b;
let res = sum(5,10); //internally handles "this" keyword
//reduces the LOC
console.log(res);