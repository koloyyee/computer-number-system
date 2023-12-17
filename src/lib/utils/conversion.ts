import type { Base, IStep } from '$lib/types/conversion.types';
import { hexCharMap } from './value.maps';

export function toDecimal(input: string, fromBase: number) {
	const answer = parseInt(input, fromBase);
	if (isNaN(answer)) return { answer: input, steps: [] };

	const reversedBinArr = input.split('').reverse();
	const steps: IStep[] = [];

	reversedBinArr.forEach((el, index) => {
		const element = hexCharMap.has(el) ? hexCharMap.get(el) : parseInt(el);
		const step: IStep = { power: 0, value: 0, element: '' };
		step.power = index;
		step.value = element * Math.pow(fromBase, index);
		step.element = el;
		steps.push(step);
	});

	return {
		answer,
		steps
	};
}

export function fromDecimal(input: string, toBase: number) {
	let decimalNum = parseInt(input);
	const answer = decimalNum.toString(toBase).toUpperCase();

	const steps = [];
	while (true) {
		if (decimalNum === 0 || isNaN(decimalNum)) break;
		const step = {};
		const reminder = decimalNum % toBase;
		step.prev = decimalNum;
		step.reminder = toBase === 16 && reminder >= 10 ? hexCharMap.get(reminder) : reminder;
		decimalNum = Math.floor(decimalNum / toBase);
		step.whole = decimalNum;
		steps.push(step);
	}

	return {
		answer,
		steps
	};
}

export function fromBinary(
	input: string,
	toBase: number = 8
): { answer: string; steps: string[][] } {
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

	console.log({ answer, steps });
	return {
		answer,
		steps
	};
}
export function toBinary(target: string, fromBase: Base = 8): number[] | [] {
	let intTarget = 0;
	if (hexCharMap.has(target.toUpperCase()) && fromBase !== 16) return [];
	if (hexCharMap.has(target.toUpperCase())) {
		intTarget = hexCharMap.get(target.toUpperCase());
	} else {
		intTarget = parseInt(target);
	}

	let nums = [];
	if (fromBase === 8) {
		nums = [4, 2, 1];
	} else {
		nums = [8, 4, 2, 1];
	}
	const result = [];
	for (let i = 0; i < nums.length; i++) {
		const complement = intTarget - nums[i];
		if (complement >= 0) {
			result.push(1);
			intTarget = complement;
		} else {
			result.push(0);
		}
	}
	return result;
}

export function fromOctal(input: string, toBase: number = 2) {
	const regex = /[a-zA-Z89]/;
	if (regex.test(input) && input) {
		return { answer: "Can't contain a-z or 8 and above", steps: [] };
	}

	const splittedInput = input.split('');
	const answer = parseInt(input, 8).toString(toBase).toUpperCase();

	if (toBase === 8) {
		return { answer: input, steps: [] };
	}

	if (toBase === 16) {
		// step 1. octal to binary
		const part1 = fromBinary(parseInt(input, 8).toString(2), 8).steps.map((step, i) => {
			const element = splittedInput[i];
			return { stepBase: 8, element, binary: step };
		});

		// step 2. binary to hex
		const part2 = fromBinary(parseInt(input, 8).toString(2), 16).steps.map((step, i) => {
			const element = answer.split('')[i];
			return { stepBase: 16, element, binary: step };
		});

		const steps = [part1, part2];
		return {
			answer,
			steps
		};
	} else {
		// to binary
		const oct2Bin2 = fromBinary(parseInt(input, 8).toString(2), 8);
		const steps = oct2Bin2.steps.map((step, i) => {
			const element = splittedInput[i];
			return { element, binary: step };
		});
		console.log({ answer, steps });
		return {
			answer,
			steps: steps
		};
	}
}

export function fromHex(input: string, toBase = 8) {
	const regex = /[g-zG-Z]/;
	if (regex.test(input) && input) {
		return { answer: 'Letter can only be between A-F', steps: [] };
	}

	const answer = parseInt(input, 16).toString(toBase);
	if (toBase === 16) return { answer: input, steps: [] };
	if (toBase === 8) {
		const result = fromBinary(parseInt(input, 16).toString(2), 8);
		return {
			answer: result.answer,
			steps: result.steps
		};
	} else {
		const splittedInput = input.toUpperCase().split('');
		const steps: [] | number[][] = [];
		splittedInput.forEach((element) => toBinary(element, 16));

		return {
			answer,
			steps
		};
	}
}

// TODO: turn into builder pattern!

// Octal to Hexadecimal conversion
// 1. Convert octal to binary
// 2. Convert binary to hexadecimal
// export function octToHex(input: string, base: number = 8) {

// }

export function toBin(input: string, base: number = 8) {
	const answer = parseInt(input, base).toString(2);

	let inputNum = parseInt(input);
	const steps: { input: number; remainder: number }[] = [];

	while (inputNum !== 0) {
		let remainder = inputNum % 2;
		inputNum = Math.floor(inputNum / 2);
		steps.push({ input: inputNum, remainder });
	}

	return {
		answer,
		steps
	};
}
