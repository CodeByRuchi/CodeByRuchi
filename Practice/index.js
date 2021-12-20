let Student = "Sushil";
Student = 11;
const Student1 = "Ruchi";
// Student1 = 12;

// Spread Operator

let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [...num1, ...num2];

console.log(num1.reduce((a, b) => a + b, 0));

let obj1 = {
	name: "Ruchi",
	rollNo: 11,
	examId: 101,
};

let obj2 = {
	examId: 102,
};

let obj3 = {
	...obj1,
	...obj2,
};

// Rest Operator
function add(a, ...rest) {
	console.log(a);
	console.log(rest);
}
// add(1, 2, 3, 4, 5);

// console.log(obj3);

class Fruits {
	name = "orange";
	constructor(fName) {
		// console.warn("constructor", this.name);
		this.name = fName;
		// console.log(this.name);
	}
	// getFruits() {
	// 	return this.name;
	// }
}
let f1 = new Fruits("Orange"); //New instance;
let f2 = new Fruits("Apple"); //New instance;

// console.log(f1.name);
// console.log(f2.name);

class Category {
	dryFruit() {
		return "Almond is dry fruit";
	}
	pomeFruit() {
		return "apple is pome fruit";
	}
}
class Fruits1 extends Category {
	constructor() {
		super();
		// console.warn("constructor");
	}
	getFruit() {
		return "you got Apple";
	}
}

let fruit1 = new Fruits1();

// console.log(fruit1.dryFruit());
