export async function saveCourse(course) {
	return fetch("/api/course/create", {method: "POST", body: course})
}
