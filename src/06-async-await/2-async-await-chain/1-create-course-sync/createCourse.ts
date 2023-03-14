export function createCourse(course) {
  if (course.title.length < 4) {
    throw new Error("Title is too short");
  }

  saveCourse(course);
}