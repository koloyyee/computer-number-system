
	const hexChars = ['A', 'B', 'C', 'D', 'E', 'F'];
	function handleChar(hexChar: string) {
		switch (hexChar) {
			case 'A':
				return 10;
			case 'B':
				return 11;
			case 'C':
				return 12;
			case 'D':
				return 13;
			case 'E':
				return 14;
			case 'F':
				return 15;
			default:
				return 0; 
		}
	}
function nonDToD( input : string, from: int): string{

	if ( from === 10) return input;

	if(from === 2) {
		// binary to decimal 
	
		return 1;
	}
	if (from === 8) {
		// octal to decimal 
		return 1;
	}
	
	
	if (from === 16) {
		// hexadecimal to decimal 
		return 1;
	}
	
}

export function toDecimal(input: string, base: number): {
		answer: number;
		steps: [{ power: string; value: number }];
	} {
		const answer = parseInt(input, base);
		if (isNaN(answer)) return input;

		const reversedBinArr = input.split('').reverse();
		let steps = [];

		reversedBinArr.forEach((el, index) => {

			const element = hexChars.includes(el)	? handleChar(el) : parseInt(el)
			console.log({element});
			const step = {};
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
export function nonBinToDecimal(input: string, base: int) {
	
	const answer = parseInt(intput, base);
	if(isNaN(answer)) return input;

}
