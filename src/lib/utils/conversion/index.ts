import { fromBinary, toBinary } from './binary';
import { fromDecimal, toDecimal } from './decimal';
import { fromHex } from './hexadecimal';

function getAnswer(input: string, fromBase: number, toBase: number) {
	return parseInt(input, fromBase).toString(toBase).toUpperCase();
}

export { fromBinary, fromDecimal, fromHex, getAnswer, toBinary, toDecimal };
