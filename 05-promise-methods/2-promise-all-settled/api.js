export function getUserInfo() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				name: "Núria",
				email: "nuriamail@mail.com",
			});
		}, 2000);
	});
}

export function getUserEnrolledCourses() {
	return new Promise((_resolve, reject) => {
		setTimeout(() => {
			reject("Error fetching enrolled courses");
		}, 2000);
	});
}
