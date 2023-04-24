export function searchTotalCustomers() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(500);
		}, 1000);
	});
}

export function searchMonthlyRevenue() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("10.000€");
		}, 500);
	});
}

export function searchOpenIncidents() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(10);
		}, 2000);
	});
}
