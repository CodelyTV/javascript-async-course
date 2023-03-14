import { getNPrime, printResult } from "./getPrimes.js";

const nPrimeMainInput = document.getElementById("nPrimeMainInput");
const nPrimeMainButton = document.getElementById("nPrimeMainButton");

const nPrimeWorkerInput = document.getElementById("nPrimeWorkerInput");
const nPrimeWorkerButton = document.getElementById("nPrimeWorkerButton");

const myWorker = new Worker("worker.js", { type: "module" });

nPrimeMainButton.onclick = () => {
  const nPrime = parseInt(nPrimeMainInput.value);
  const result = getNPrime(nPrime);
  printResult("nPrimeMainResult", nPrime, result);
};

nPrimeWorkerButton.onclick = () => {
  const nPrime = parseInt(nPrimeWorkerInput.value);

  myWorker.postMessage(nPrime);

  myWorker.onmessage = (e) => {
    printResult("nPrimeWorkerResult", nPrime, e.data);
  };
};
