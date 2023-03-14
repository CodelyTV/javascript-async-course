import { getUsers, UsersNotFoundError } from "./api";

(async () => {
  try {
    const users = await getUsers();
  } catch (error) {
    // error is unkown so it is type safe and we need to narrow it before usage
    //error.toStrin()

    if (error instanceof UsersNotFoundError) {
      console.error(error.errorMessage());
    }
  }
})();
