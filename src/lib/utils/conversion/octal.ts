import { getAnswer } from '.';
import { toBinary } from './binary';

export function fromOctal(input: string, toBase: number = 2) {
	const regex = /[a-zA-Z89]/;
	if (regex.test(input) && input) {
		return { answer: "Can't contain a-z or 8 and above", steps: [] };
	}

	const splittedInput = input.split('');
	const answer = getAnswer(input, 8, toBase);

	switch (toBase) {
		case 16:
			return octHex(input, splittedInput, answer, 8, 16);
		case 2:
			return toBinary(input, splittedInput, answer, 8, 8);
		default:
			return { answer: input, steps: [] };
	}
}

// function toHex(input: string, splittedInput: string[], answer: string) {
// 	const part1 = toBinary(input, splittedInput, answer, 8, 8).steps[0];
// 	const part2 = toBinary(input, answer.split(''), answer, 8, 16).steps[0];

// 	const steps = [part1, part2];
// 	return {
// 		answer,
// 		steps
// 	};
// }

// this function is used between octal and hexadecimal
export function octHex(
	input: string,
	splittedInput: string[],
	answer: string,
	fromBase: number,
	toBase: number
) {
	// part 1 is to turn the "fromBase" to binary with its own splitted text value with steps eg: 8 -> 8
	const part1 = toBinary(input, splittedInput, answer, fromBase, fromBase).steps[0];
	// part 2 is to turn the "fromBase" to "toBase" with its "to-be" splitted text value with steps eg: 8 -> 16
	const part2 = toBinary(input, answer.split(''), answer, fromBase, toBase).steps[0];

	const steps = [part1, part2];
	return {
		answer,
		steps
	};
}
