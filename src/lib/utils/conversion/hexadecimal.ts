import { getAnswer } from '.';
import { BASE } from '../value.maps';
import { toBinary } from './binary';
import { octHex } from './octal';

export function fromHex(input: string, toBase = 8) {
	const regex = /[g-zG-Z\s]/;
	if (regex.test(input)) {
		return { answer: 'Letter can only be between A-F', steps: [] };
	}

	const answer = getAnswer(input, BASE.HEXADECIMAL, toBase);
	const splittedInput = input.toUpperCase().split('');

	switch (toBase) {
		case 8:
			return octHex(input, splittedInput, answer, BASE.HEXADECIMAL, BASE.OCTAL);
		case 2:
			return toBinary(input, splittedInput, answer, BASE.HEXADECIMAL, BASE.HEXADECIMAL);
		default:
			return { answer: input, steps: [] };
	}
}
