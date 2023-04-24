import { getUserList, timeoutCheck } from "./api.js";

const timeout = process.argv[2] || 5000;

Promise.race([getUserList(), timeoutCheck(timeout)])
	.then(() => {
		console.log("🚀 Users found");
	})
	.catch(() => {
		console.log("⌛ Timeout error in getUserList");
	});
