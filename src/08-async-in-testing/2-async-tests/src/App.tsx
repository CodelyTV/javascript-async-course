import { Form } from "./sections/users/Form";

async function createUser(user: string) {
	await fetch("https://jsonplaceholder.typicode.com/users", {
		method: "POST",
		body: JSON.stringify(user),
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export function App() {
	return (
		<div className="App">
			<h3>🌱⚛️ Create React App Codely template example</h3>
			<h2>Current users</h2>
			<Form createUser={createUser} />
		</div>
	);
}
