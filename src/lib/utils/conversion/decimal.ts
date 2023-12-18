import type { IStep } from '$lib/types/conversion.types';
import { hexCharMap } from '../value.maps';

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
