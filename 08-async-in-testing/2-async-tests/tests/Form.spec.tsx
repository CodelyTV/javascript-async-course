import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import user from "@testing-library/user-event";

import { Form } from "../src/sections/users/Form";

test("calls updateUsername with the new username", async () => {
	const createUser = jest.fn().mockResolvedValue("");
	const fakeUsername = "mr potato";

	render(<Form createUser={createUser} />);

	const usernameInput = screen.getByLabelText(/username/i);
	user.type(usernameInput, fakeUsername);
	user.click(screen.getByText(/submit/i));

	expect(createUser).toHaveBeenCalledWith(fakeUsername);
	await waitForElementToBeRemoved(() => screen.queryByText(/saving/i));
});
