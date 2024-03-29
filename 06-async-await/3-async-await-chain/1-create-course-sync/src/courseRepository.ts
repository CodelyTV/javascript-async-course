import { Course } from "./Course";

export function saveCourse(course: Course): void {
	const courses = getAllFromLocalStorage();

	courses.set(course.id, course);
	localStorage.setItem("courses", JSON.stringify(Array.from(courses.entries())));
}

function getAllFromLocalStorage(): Map<string, Course> {
	const courses = localStorage.getItem("courses");

	if (courses === null) {
		return new Map();
	}

	const map = new Map(JSON.parse(courses) as Iterable<[string, Course]>);

	return map;
}
