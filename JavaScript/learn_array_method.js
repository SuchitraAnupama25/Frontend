let array = [10,20,30,40,50];
let value = array.slice(0,2);//starting at 0 and ending at 2,excluding 2
console.log(value);

let value1 = array.slice(-2);
console.log(value1);

let value2 = array.slice(2);
console.log(value2);

let res = [
    {name:"iphone",price:1234},
    {name:"iphone",price:3456},
    {name:"iphone",price:1236}
];
let values = res.slice(0,1);
console.log(values);

let arr = [10,20,30,40,50];
arr.splice(1,1)
console.log(arr);//splice(count,delete_count,item1,item2)
