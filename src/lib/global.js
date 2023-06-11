export const PUZZLE_TYPES = {
	DOOR: 'door',
	TEST_1: 'test1',
	TEST_2: 'test2'
};

export const PUZZLES = [
	{
		type: PUZZLE_TYPES.DOOR,
		description: 'puzzle 1 hahahah, irgendwas mit türen',
		imgLink: 'http://placekitten.com/200/200',
		matchesScenario: ['scen1'],
		solutionForm: [
			{
				type: 'text',
				correctValue: 'ABC123',
				maxLength: '10'
			}
		]
	},
	{
		type: PUZZLE_TYPES.TEST_1,
		description: 'testpuzzle 1',
		imgLink: 'http://placekitten.com/200/200',
		matchesScenario: ['scen1', 'scen2', 'scen3'],
		solutionForm: [
			{
				type: 'text',
				correctValue: 'ABC123',
				maxLength: '10'
			}
		]
	},
	{
		type: PUZZLE_TYPES.TEST_2,
		description: 'testpuzzle 2',
		imgLink: 'http://placekitten.com/200/200',
		matchesScenario: ['scen1', 'scen2', 'scen3'],
		solutionForm: [
			{
				type: 'text',
				correctValue: 'ABC123',
				maxLength: '10'
			}
		]
	}
];
