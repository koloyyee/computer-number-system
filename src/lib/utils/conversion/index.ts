import { fromBinary, toBinary } from './binary';
import { fromDecimal, toDecimal } from './decimal';
import { fromHex } from './hexadecimal';

function getAnswer(input: string, fromBase: number, toBase: number) {
	let answer = parseInt(input, fromBase).toString(toBase).toUpperCase();
	answer = answer.toLowerCase() === 'nan' ? '' : answer;
	return answer;
}

export { fromBinary, fromDecimal, fromHex, getAnswer, toBinary, toDecimal };
