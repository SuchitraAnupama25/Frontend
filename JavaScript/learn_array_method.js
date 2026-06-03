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
// arr.splice(1,2,70);
// arr.splice(1,2,70,90);
console.log(arr);//splice(count,delete_count,item1,item2)

//map,filter & reduce
let arrs = [10,20,30,40,50];
let val = arrs.filter(num => num > 20);//filters the specified content
console.log(val);

let res1 = [
    {name:"iphone",price:1234},
    {name:"iphone",price:3456},
    {name:"iphone",price:1236},
    {name:"Samsung",price:1234},
    {name:"redmi",price:1234}
];
let values1 = res1.slice(0,1);
let vals = res1.filter(mobile => mobile.name == "Samsung");
console.log(vals);
console.log(values1);

let company = ["Apple","Microsoft","Nvidia","Adobe"];
company.splice(1,0,"Open AI","claude");
console.log(company);

let transaction = [
    {status:"FAILED",product:"Phone",vaue:2000},
    {status:"SUCCESS",product:"Charger",vaue:2000},
    {status:"FAILED",product:"Smart Watch",vaue:3000},
    {status:"FAILED",product:"Shoes",vaue:5000},
    {status:"SUCCESS",product:"Phone",vaue:2000},
    {status:"SUCCESS",product:"Phone",vaue:2000}
]

let mapOp = transaction.map((vale) => `product of ${vale.product} amount ${vale.vaue}`);
let mapOp1 = transaction.map((vale) => console.log(vale));
console.log(mapOp);

let finOp = transaction.filter((value) => value.status == "SUCCESS");
console.log(finOp);

//map method will iterate through each element of an array
let arry = [20,30,40];
let valu = arry.map((num) => num * 2);
console.log(valu);