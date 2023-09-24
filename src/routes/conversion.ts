import type { IStep, ISteps } from "$lib/types/conversion.types";

const hexMap = new Map();
hexMap.set("A", 10);
hexMap.set("B", 11);
hexMap.set("C", 12);
hexMap.set("D", 13);
hexMap.set("E", 14);
hexMap.set("F", 15);

function getByValue(target: number) {
	for (const [key, value] of hexMap.entries()) {
		if (value === target) {
			return key;
		}
	}

}

export function toDecimal(input: string, base: number): {
	answer: number;
	steps: [{ power: string; value: number }];
} | string {
	const answer = parseInt(input, base);
	if (isNaN(answer)) return { answer: input, steps: [] };

	const reversedBinArr = input.split('').reverse();
	let steps: ISteps = [];

	reversedBinArr.forEach((el, index) => {

		const element = hexMap.has(el) ? hexMap.get(el) : parseInt(el)
		const step: IStep = { power: 0, value: 0, element: "" };
		step.power = index;
		step.value = element * Math.pow(base, index);
		step.element = el;
		steps.push(step);
	});

	return {
		answer,
		steps
	};
}


export function fromDecimal(input: string, base: number) {
	let decimalNum = parseInt(input);
	const answer = decimalNum.toString(base).toUpperCase();

	let steps = [];
	while (true) {
		if (decimalNum === 0 || isNaN(decimalNum)) break;
		const step = {};
		const reminder = decimalNum % base;
		step.prev = decimalNum;
		step.reminder = (base === 16 && reminder >= 10) ?
			getByValue(reminder) : reminder;
		decimalNum = Math.floor(decimalNum / base);
		step.whole = decimalNum;
		console.log(step.reminder);
		steps.push(step);

	}
	console.log({ steps });

	return {
		answer,
		steps
	}
}
