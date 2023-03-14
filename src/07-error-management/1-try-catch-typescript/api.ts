export class UsersNotFoundError extends Error {
  errorMessage() {
    return "Users can not be fetched";
  }
}

export function getUsers(): Promise<{ name: string }[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new UsersNotFoundError());
      // resolve([{ name: "Núria" }, { name: "Isma" }]);
    }, 3000);
  });
}
