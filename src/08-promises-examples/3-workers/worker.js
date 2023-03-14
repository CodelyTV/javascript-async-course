import { getNPrime } from "./getPrimes.js";

onmessage = (e) => {
  console.log("Message received from main script");

  const result = getNPrime(e.data);

  console.log("Posting message back to main script");
  postMessage(result);
};
