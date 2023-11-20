interface IStep {
	power: number;
	value: number;
	element?: string;
}

interface ISteps {
	answer: number | string;
	steps: IStep[] | [];
}

type Base = 2 | 8 | 10 | 16;
export type { Base, IStep, ISteps };
