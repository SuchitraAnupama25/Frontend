//without destructuring

const colors = ["Red","Green","Blue"];
const first = colors[0];
const second = colors[1];
const third = colors[2];
console.log(first);
console.log(second);
console.log(third);

//with destructuring

const colours = ["Red","Green","Blue"];
const[first1,second2,third3] = colours;
console.log(first1);
console.log(second2);
console.log(third3);

//object without destructuring
const employee1={
    name1:"Anupama",
    role1:"Developer",
    company1:"MNC"
}

const name1 = employee1.name1;
const role1 = employee1.role1;
const company1 = employee1.company1;

console.log(name1);
console.log(role1);
console.log(company1);


//object with destructuring

const employee = {
    name:"Anupama",
    role:"Developer",
    company:"MNC"
};
const{name,role,company} = employee;

console.log(name);
console.log(role);
console.log(company);

let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let result = arr1.concat(arr2);
console.log(result);

//Spread operator with array
const num1 = [1,2,3];
const num2 = [4,5,6];

const result1 = [...num1,...num2];//spread operator (combines 2 array or object)
const result2 = [...num1,40,50,...num2];
console.log(result1);
console.log(result2);

const fruits = ["Apple","Mango","Orange"];
const copiedFruits = [...fruits];
console.log(copiedFruits);

//spread operator with objects

const employee2 = {
    name:"Anupama",
    role:"System Engineer"
};

const copiedEmployee2 = {
    ...employee2,
    ...{age:20}
};

console.log(copiedEmployee2);