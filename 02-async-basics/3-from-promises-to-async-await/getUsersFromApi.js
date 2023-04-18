const data = { user: ["Núria", "Isma"] };

export function getUsersFromApi() {
  return new Promise((resolve) => {
    resolve(data);
  });
}
