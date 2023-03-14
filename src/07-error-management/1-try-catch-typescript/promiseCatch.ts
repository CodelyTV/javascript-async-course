import { getUsers } from "./api";

getUsers()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    // Error is not type safe because is any
    console.error(error.toStrin());
  });
