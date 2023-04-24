document.addEventListener("itemAdded", (ev) => {
	console.log(ev.detail);
});

const button = document.getElementById("cartButton");

button.addEventListener("click", (ev) => {
	const itemId = ev.target.dataset.itemid;

	document.dispatchEvent(new CustomEvent("itemAdded", { detail: { item: itemId } }));
});
