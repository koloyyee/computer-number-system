import { toBinary } from './binary';
import { octHex } from './octal';

export function fromHex(input: string, toBase = 8) {
	const regex = /[g-zG-Z]/;
	if (regex.test(input) && input) {
		return { answer: 'Letter can only be between A-F', steps: [] };
	}

	const answer = parseInt(input, 16).toString(toBase);
	const splittedInput = input.toUpperCase().split('');

	switch (toBase) {
		case 8:
			return octHex(input, splittedInput, answer, 16, 8);
		case 2:
			return toBinary(input, splittedInput, answer, 16, 16);
		default:
			return { answer: input, steps: [] };
	}
}
