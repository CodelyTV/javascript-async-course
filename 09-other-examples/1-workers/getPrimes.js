export function getNPrime(n) {
	const arr = [];
	let i = 2;

	while (arr.length < n) {
		if (isPrime(i)) {
			arr.push(i);
		}
		i++;
	}

	return arr.pop();

	function isPrime(n) {
		if (n < 2) {
			return false;
		}

		for (let i = 2; i <= Math.sqrt(n); i++) {
			if (n % i === 0) {
				return false;
			}
		}

		return true;
	}
}

export function printResult(containerId, nPrime, result) {
	document.getElementById(containerId).innerHTML = `The ${nPrime}th prime is ${result}`;
}
