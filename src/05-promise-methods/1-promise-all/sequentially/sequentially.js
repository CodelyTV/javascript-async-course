import { getUserEnrolledCourses, getUserInfo } from "./api.js";

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const courses = document.getElementById("courses");

const userInfo = await getUserInfo();
const enrolledCourses = await getUserEnrolledCourses();

userName.innerHTML = userInfo.name;
userEmail.innerHTML = userInfo.email;

enrolledCourses.forEach((course) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = course.title;
  courses.appendChild(listItem);
});