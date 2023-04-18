import { Course } from "./Course";
import { saveCourse } from "./courseRepository";

export function createCourse(course: Course): void {
	if (course.title.length < 4) {
		alert("Title should be more than 4 characters");
		throw new Error("Title is too short");
	}

	saveCourse(course);
}
