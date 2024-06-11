// let and var
var x = 25;
{
	let x = 12;
	console.log(x);
}
console.log(x);

//arrow function

const z = (x, y) => {
	return x + y;
}

// more shorter way
const a = (x, y) => x + y;

console.log(a(12, 8));


// Spread Operator
const q1 = ["jan", "feb", "march"];
const q2 = ["apr", "may", "june"];
const q3 = ["july", "aug", "sep"];
const q4 = ["oct", "nov", "dec"];

const year = [...q1, ...q2, ...q3, ...q4];   /* --> Spread operation to expand the array */
console.log(year);


const myNumbers = [1, 85, -11, 69, 73, -45, 25, 12];
let maxValue = Math.max(...myNumbers);
console.log(maxValue);

//for-of loop
const numbers = [1, 85, -11, 69, 73, -45, 25, 12];
let sum = 0;
for (let num of numbers) {
	sum = sum + num;
}
console.log(sum);


const name = "Siddharth Suman";
let text = "";
for (let letter of name) {
	text += letter + " ";
}
console.log(text);

//map
const fruits = new Map([
	["apples", 500],
	["bananas", 600],
	["oranges", 700],
]);
console.log(fruits);
console.log(fruits.get("apples"));  //gets keyword for accesing key-value

//sets
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add(5);
console.log(letters);


//classes
class Car {
	constructor(name, mfgYear) {
		this.name = name;
		this.mfgYear = mfgYear;
	}
}
const myCar1 = new Car("Mercedes", 2022);
const myCar2 = new Car("Porsche", 2020);
console.log(myCar1);

//Promises
const myFunction = () => {
	return myPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("This is Inside Promise");
			resolve();
		}, 2000);
	});
};
myFunction()
	.then(() => {
		console.log("Resolved");
	})
	.catch(() => {
		console.error("Rejected");
	})


//Object
const person = {
	firstName: "Siddharth",
	lastName: "Suman",
	age: "22",
	eyeColor: "blue"
};

let id = Symbol("id");
person[id] = 140111;
console.log(person);


//default value
const addTwoNumber = (a, b = 10) => a + b;
console.log(addTwoNumber(10));
console.log(addTwoNumber(15));


// rest operator
const addNumbers = (...args) => {
	let sum = 0;
	for (let arg of args) {
		sum += arg;
	}
	return sum;
};
console.log(addNumbers(1, 2, 3, 4, 5, 6));