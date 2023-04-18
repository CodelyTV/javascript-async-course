import { v4 as uuidv4 } from "uuid";

import { createCourse } from "./createCourse";

interface CreateCourseFormElements extends HTMLFormControlsCollection {
	title: HTMLInputElement;
	description: HTMLInputElement;
}

interface CreateCourseForm extends HTMLFormElement {
	readonly elements: CreateCourseFormElements;
}

export function handleSubmit(ev: Event): void {
	ev.preventDefault();

	const form = ev.target as CreateCourseForm;

	createCourse({
		id: uuidv4(),
		title: form.elements.title.value,
		description: form.elements.description.value,
	});

	showSuccessMessage();
}

export function showSuccessMessage(): void {
	document.getElementById("successMessage")?.style.setProperty("display", "block");
}

export function hideSuccessMessage(): void {
	document.getElementById("successMessage")?.style.setProperty("display", "none");
}
