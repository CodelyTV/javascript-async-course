function promise() {
	return new Promise(resolve => resolve())
}

function test() {
	setTimeout(() => console.log("timeout"), 0)
	promise().then(() => console.log("promise"))
}
