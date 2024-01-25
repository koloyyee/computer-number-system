import { BASE } from './utils/value.maps';

function getKeyByValue(map: Map<string, number>, value: string | number) {
	const result = [...map.entries()].find(([, val]) => val === value);
	return result ? result[0] : '';
}

function checkBase(input: string, fromBase: number): boolean {
	switch (fromBase) {
		case BASE.BINARY:
			return /^[01]+$/.test(input);
		case BASE.OCTAL:
			return /[a-zA-Z89\s]/.test(input);
		case BASE.DECIMAL:
			return !isNaN(parseInt(input));
		case BASE.HEXADECIMAL:
			return /^[0-9A-F]+$/i.test(input);
		default:
			return false;
	}
}

export { checkBase, getKeyByValue };
