let flag = false;

let Promise1 = new Promise((resolve, reject) => {
	if (flag) {
		resolve("Successfully");
	} else {
		reject("Failed");
	}
});

Promise1.then((result) => console.log(result)).catch((error) =>
	console.log(error)
);
