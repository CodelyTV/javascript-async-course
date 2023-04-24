if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register(new URL("sw.js", import.meta.url))
			.then(() => {
				// Registration was successful
				console.log("ServiceWorker registered");
			})
			.catch((err) => {
				// registration failed :(
				console.log("ServiceWorker registration failed: ", err);
			});
	});
}
