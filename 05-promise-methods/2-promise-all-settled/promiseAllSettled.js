import { getUserEnrolledCourses, getUserInfo } from "./api.js";

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const courses = document.getElementById("courses");
const errors = document.getElementById("errors");

Promise.allSettled([getUserInfo(), getUserEnrolledCourses()]).then((promisesResults) => {
	const [userInfoPromiseResult, enrolledCoursesPromiseResult] = promisesResults;

	if (userInfoPromiseResult.status === "fulfilled") {
		userName.innerHTML = userInfoPromiseResult.value.name;
		userEmail.innerHTML = userInfoPromiseResult.value.email;
	}

	if (enrolledCoursesPromiseResult.status === "fulfilled") {
		enrolledCoursesPromiseResult.value.forEach((course) => {
			const listItem = document.createElement("li");
			listItem.innerHTML = course.title;
			courses.appendChild(listItem);
		});
	}

	promisesResults
		.filter((r) => r.status === "rejected")
		.forEach((r) => {
			const error = document.createElement("li");
			error.innerHTML = r.reason;
			errors.appendChild(error);
		});
});
