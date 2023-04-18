import { Course } from "./Course";
import { saveCourse } from "./courseRepository";
import { hideSuccessMessage } from "./form";

export function createCourse(course: Course): void {
	if (course.title.length < 4) {
		alert("Title should be more than 4 characters");
		throw new Error("Title is too short");
	}

	saveCourse(course).catch(() => {
		hideSuccessMessage();
		alert("⚠️ Something went wrong");
	});
}
