import { Course } from "./Course";

export async function saveCourse(course: Course): Promise<Response> {
	return fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: JSON.stringify({
			id: course.id,
			name: course.title,
			desc: course.description,
		}),
	});
}
