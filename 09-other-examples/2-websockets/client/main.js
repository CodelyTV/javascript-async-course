const chatForm = document.getElementById("chatForm");
const sendMessageButton = document.getElementById("sendMessage");
const messageList = document.getElementById("messageList");

const ws = new WebSocket("ws://127.0.0.1:9090");

chatForm.addEventListener("submit", (ev) => {
  ws.send(ev.target.elements.messageInput.value);
  ev.target.elements.messageInput.value = "";
});

ws.onmessage = (ev) => {
  var listItem = document.createElement("li");
  listItem.innerHTML = ev.data;
  messageList.appendChild(listItem);
};
