function processElement(time, index) {
	return new Promise((resolve) =>
		setTimeout(() => {
			console.log(`${index}: element processed`);
			resolve(index);
		}, time)
	);
}

async function processAllData(data) {
	array.forEach(async (element, index) => {
		await processElement(element, index);
	});

	console.log("Finish");
}

const array = new Array(3).fill(1000);

processAllData(array);
