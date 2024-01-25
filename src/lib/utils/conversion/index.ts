import { fromBinary, toBinary } from './binary';
import { fromDecimal, toDecimal } from './decimal';
import { fromHex } from './hexadecimal';

function getAnswer(input: string, fromBase: number, toBase: number = 2) {
	console.log({ toBase, fromBase });
	const answer = parseInt(input, fromBase).toString(toBase).toUpperCase();
	return answer === 'NAN' ? 'Invalid Input' : answer;
}

export { fromBinary, fromDecimal, fromHex, getAnswer, toBinary, toDecimal };
