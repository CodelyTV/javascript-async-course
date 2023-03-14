import uuid from "uuid";

document.getElementById("courseForm").addEventListener("submit", () => {
  handleSubmit()
})

function handleSubmit(ev) {
  ev.preventDefault();

  createCourse({
    id: uuid.v4(),
    title: ev.target.elements.title.value,
    description: ev.target.elements.description.value,
  });
}