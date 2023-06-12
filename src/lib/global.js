import { joinArrayNaturally } from '$lib/helper.js';

export function generatePrompt(puzzleDescriptions, scenarioDescription, promptWords) {
	const MAX_WORDS = 750;
	const MAX_WORDS_PER_PARAGRAPH = 200;

	const paragraphs = puzzleDescriptions.length + 2;
	let puzzleDescriptionString = '';
	for (const description of puzzleDescriptions) {
		puzzleDescriptionString += `- ${description}\n`;
	}

	console.log('test', promptWords);
	const prompt = `Give me the textual structure for an online escape room. The escape room is structured as follows
- An opening paragraph that introduces the setting, without a puzzle.
${puzzleDescriptionString}- An ending paragraph that concludes the story, without a puzzle.

The puzzles themselves will be inserted by me, you need to provide a transitional paragraph for each one.
Do not describe the content of the puzzle, but rather the transition from the previous paragraph to the puzzle.

In this case, I need ${paragraphs} paragraphs from you. Since I will split your output on paragraph breaks, make sure that you provide exactly ${paragraphs} paragraphs.
The output you provide will be used in the escape room as-is, so make sure to use immersive language. Do not explain the escape room usage to me, but treat it like talking to the player directly.

Do not describe or number the paragraphs: That means no "Ending paragraph" or "Opening paragraph" descriptors, since I would have to filter them out.
Also, do not introduce into the escape room from a meta perspective. Treat your whole output as already happening inside the escape room itself.

Also make sure your answer does not exceed ${MAX_WORDS} words total, and each paragraph does not exceed ${MAX_WORDS_PER_PARAGRAPH} words.

The setting for the escape room is ${scenarioDescription} with elements of ${joinArrayNaturally(
		Object.values(promptWords)
	)}.`;

	return prompt;
}

export const PUZZLES = [
	{
		type: 'riddle', // to avoid multiple of the same puzzle type
		description: 'puzzle 1 hahahah, irgendwas mit türen', // text for the puzzle
		promptExplanation:
			'A puzzle where you have to solve a riddle to get the keylock combination for a metal door', // description for chatgpt
		imgLink: 'http://placekitten.com/200/200', // image
		matchesScenario: ['prison break'], // which scenario can use this riddle
		solutionForm: [
			{
				type: 'text',
				correctValue: 'ABC123', // correct answer
				maxLength: '10'
			}
		]
	},
	{
		type: 'math',
		description: 'testpuzzle 1',
		promptExplanation: 'A puzzle where you have to solve a math problem, carved on a stone wall',
		imgLink: 'http://placekitten.com/200/200',
		matchesScenario: ['prison break', 'harry potter', 'save the world'],
		solutionForm: [
			{
				type: 'text',
				correctValue: 'ABC123',
				maxLength: '10'
			}
		]
	},
	{
		type: 'caesar',
		description: 'testpuzzle 2',
		promptExplanation: 'A puzzle where you have to decipher a caesar cipher on a piece of paper',
		imgLink: 'http://placekitten.com/200/200',
		matchesScenario: ['prison break', 'harry potter', 'save the world'],
		solutionForm: [
			{
				type: 'text',
				correctValue: 'ABC123',
				maxLength: '10'
			}
		]
	}
];
