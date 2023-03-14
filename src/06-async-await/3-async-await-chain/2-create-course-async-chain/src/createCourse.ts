import { Course } from "./Course";
import { saveCourse } from "./courseRepository";

export async function createCourse(course: Course): Promise<void> {
	if (course.title.length < 4) {
		alert("Title should be more than 4 characters");
		throw new Error("Title is too short");
	}

	return saveCourse(course);
}
