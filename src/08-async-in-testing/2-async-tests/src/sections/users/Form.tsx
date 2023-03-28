import { useState } from "react";

type FormEvent = React.FormEvent<HTMLFormElement> & {
	target: {
		elements: { username: { value: string } };
	};
};

export function Form({ createUser }: { createUser: (username: string) => Promise<void> }) {
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();
		const newUsername = event.target.elements.username.value;
		setIsLoading(true);
		await createUser(newUsername);
		setIsLoading(false);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="username">Username</label>
			<input id="username" />
			<button type="submit">Submit</button>
			<span>{isLoading ? "Saving..." : null}</span>
		</form>
	);
}
