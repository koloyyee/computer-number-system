interface IStep {
	power: number;
	value: number;
	element: string;
}

interface ISteps {
	answer: number;
	steps: IStep[];
}

export type { IStep, ISteps };
