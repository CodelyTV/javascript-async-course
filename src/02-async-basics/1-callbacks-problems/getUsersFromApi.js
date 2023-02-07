const data = { user: ["Núria", "Isma"] };

export function getUsersFromApi(callback) {
  callback(data);
}

export function getUsersFromApiCurrified(callback) {
  return function () {
    callback(data);
  };
}
