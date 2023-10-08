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
		steps.push(step);

	}

	return {
		answer,
		steps
	}
}

export function fromBin(input: string, base: number = 8): { answer: string, steps: string[][] } {
	const nonBin = ["2", "3", "4", "5", "6", "7", "8", "9"]
	nonBin.forEach((num) => {
		if (input.includes(num)) {
			return { answer: input, steps: [] }
		}
	})
	const splittedInput = input.split("").reverse();
	const chunkSize: number = base === 8 ? 3 : 4;
	const steps: string[][] = [];

	for (let i = 0; i < splittedInput.length; i += chunkSize) {
		const chunk = splittedInput.slice(i, i + chunkSize);
		steps.push(chunk);
	}
	steps.reverse().forEach((chunk, index) => {
		chunk.reverse()
		if (chunk.length < chunkSize && index === 0) {
			while (chunk.length < chunkSize) {
				chunk.unshift("0");
			}
		} else if (chunk.length < chunkSize && index === steps.length - 1) {
			while (chunk.length < chunkSize) {
				chunk.push("0");
			}
		}
	});

	let answer = parseInt(input, 2).toString(base).toUpperCase();
	answer = answer === "NAN" ? "" : answer

	return {
		answer,
		steps
	};
}
