export function getUserList() {
	return fetch("https://hub.dummyapis.com/delay?seconds=5");
}

export function timeoutCheck(timeout) {
	return new Promise((_resolve, reject) => {
		setTimeout(() => {
			reject(new Error("La solicitud ha tardado demasiado en completarse."));
		}, timeout);
	});
}
