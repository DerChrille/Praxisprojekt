import { joinArrayNaturally } from '$lib/helper.js';

export const PARAGRAPH_DIVIDER = '<--->';

export const LINK_AFTER_FINISHING = null;
export const LINK_AFTER_FINISHING_LABEL = 'Continue to survey';

export function generatePrompt(puzzleDescriptions, scenarioDescription, promptWords) {
	const paragraphs = puzzleDescriptions.length + 2;
	let puzzleDescriptionString = '';
	for (const description of puzzleDescriptions) {
		puzzleDescriptionString += `- ${description}\n`;
	}

	const prompt = `I am writing an web-based escape room generator and need you to write the story beween the puzzles.

Give me the textual structure for the story. The story is structured as follows:

- A beginning
${puzzleDescriptionString}- An ending paragraph that concludes the story

Rules:
- Give me exactly ${paragraphs} paragraphs!
- Create a story in a ${scenarioDescription} universe which is bend around ${joinArrayNaturally(
		Object.values(promptWords)
	)}!
- Each structure should be parted by a "${PARAGRAPH_DIVIDER}"!
- Do not label the paragraphs! 
- Do not give the riddles or answers!`;

	return prompt;
}

export const PUZZLES = [
	{
		type: 'riddle', // to avoid multiple of the same puzzle type
		description: 'puzzle 1 hahahah, irgendwas mit türen', // text for the puzzle
		promptExplanation:
			'A story that leads to a puzzle where you have to solve a riddle to get the keylock combination for a metal door', // description for chatgpt
		imgLink: 'http://placekitten.com/200/200', // image
		matchesScenario: ['prison break'], // which scenario can use this riddle (e.g. "prison break", "harry potter", "save the world")
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
		promptExplanation:
			'A story that leads to a puzzle where you have to solve a math problem, carved on a stone wall',
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
		promptExplanation:
			'A story that leads to a puzzle where you have to decipher a caesar cipher on a piece of paper',
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
