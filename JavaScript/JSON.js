let obj = [
    {
        name:"Anupama",
        city:"Vijayawada"
    },
    {
        name:"Sagar",
        city:"Ongole"
    },
];
console.log(obj)

let result = JSON.stringify(obj)//converts arr objs to strings
console.log(result)

let final = JSON.parse(result)//convert strings to array objs
console.log(final)