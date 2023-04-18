import { Course } from "./Course";

export async function saveCourse(course: Course): Promise<void> {
	await fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: JSON.stringify({
			id: course.id,
			name: course.title,
			desc: course.description,
		}),
	});
}
