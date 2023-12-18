function fromBinary(input: string, toBase: number = 8): { answer: string; steps: string[][] } {
	const regex = /[a-zA-Z2-9]/;
	if (regex.test(input)) {
		return { answer: "Can't contain 2-9 or a-z", steps: [] };
	}
	const splittedInput = input.split('').reverse();
	const chunkSize: number = toBase === 8 ? 3 : 4;
	const steps: string[][] = [];

	for (let i = 0; i < splittedInput.length; i += chunkSize) {
		const chunk = splittedInput.slice(i, i + chunkSize);
		steps.push(chunk);
	}
	steps.reverse().forEach((chunk, index) => {
		chunk.reverse();
		if (chunk.length < chunkSize && index === 0) {
			while (chunk.length < chunkSize) {
				chunk.unshift('0');
			}
		} else if (chunk.length < chunkSize && index === steps.length - 1) {
			while (chunk.length < chunkSize) {
				chunk.push('0');
			}
		}
	});

	let answer = parseInt(input, 2).toString(toBase).toUpperCase();
	answer = answer === 'NaN' ? '' : answer;

	return {
		answer,
		steps
	};
}
function toBinary(
	input: string,
	splittedInput: string[],
	answer: string,
	fromBase: number,
	toBase: number
) {
	const base2 = 2;
	const steps = fromBinary(parseInt(input, fromBase).toString(base2), toBase).steps.map(
		(step, i) => {
			const element = splittedInput[i];
			return { stepBase: toBase, element, binary: step };
		}
	);
	return {
		answer,
		steps: [steps]
	};
}
export { fromBinary, toBinary };
