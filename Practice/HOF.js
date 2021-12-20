function f1(a) {
	return a;
}

function f2(b) {
	console.log("Working_" + b);
}

let f3 = f1(f2);
// f3(5);

// console.log(f1());

function makeFunc() {
	var name = "Mozilla";
	function displayName() {
		console.log(name);
	}
	return displayName;
}

var myFunc = makeFunc();
myFunc();
