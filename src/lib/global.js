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

- A beginning.
${puzzleDescriptionString}- An ending paragraph that concludes the story.

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
		description: `The door marked by a symbol unknown, guards secrets ancient, waiting to be shown. Answer me 
		this: in magic's grand show, what disappears, but continues to grow?`, // text for the puzzle
		promptExplanation:
			'A story that leads to a puzzle where you have to solve a riddle, written on an triangle shaped, wooden door', // description for chatgpt
		imgLink: '/img/riddle/door/hp door1.png', // image
		matchesScenario: ['harry potter'], // which scenario can use this riddle (e.g. "prison break", "harry potter", "save the world")
		solutionForm: [
			{
				type: 'text',
				correctValue: 'ABC123', // correct answer
				maxLength: '10'
			}
		]
	},
	{
		type: 'riddle', // to avoid multiple of the same puzzle type
		description: `The door sturdy with iron and might, Promises an exit, hidden from sight. Complete this riddle, and it shall set you free, What location holds power over your plea?`, // text for the puzzle
		promptExplanation:
			'A story that leads to a puzzle where you have to solve a riddle, written on an solid, reinfored door.', // description for chatgpt
		imgLink: '/img/riddle/door/pb door1.png', // image
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
		type: 'riddle', // to avoid multiple of the same puzzle type
		description: `The door, a murky, swirling tide, a sea of chaos, where hope can't easily hide. Amidst the depths, a 
						query emerges clear, tell me, what do we strive for to make conflicts disappear?`, // text for the puzzle
		promptExplanation:
			'A story that leads to a puzzle where you have to solve a riddle, written on an metal door with an strange golden heart on it.', // description for chatgpt
		imgLink: '/img/riddle/door/stw door1.png', // image
		matchesScenario: ['save the world'], // which scenario can use this riddle (e.g. "prison break", "harry potter", "save the world")
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
		description: 
			"In a magical potion-making class, three witches named Agatha, Beatrice, and Cassandra\n"+
			"are competing to brew the most potent potions. Each witch has a unique ingredient and a specific quantity.\n"+
			"The following clues will help you determine the quantity of each ingredient:\n"+
			"1.	The sum of Agatha's ingredient and Beatrice's ingredient is 14.\n"+
			"2.	Cassandra's ingredient is twice as much as Agatha's ingredient.\n"+
			"3.	The total quantity of all the ingredients is 36.\n"+
			"How many ingredients did Agatha and Cassandra use?",
			
		promptExplanation:
			'A story that leads to a puzzle where you have to solve a riddle, written on an note on a ouija board',
		imgLink: '/img/riddle/math/hp math.png',
		matchesScenario: ['harry potter'],
		solutionForm: [
			{
				type: 'text',
				correctValue: 'ABC123',
				maxLength: '10'
			}
		]
	},
	{
		type: 'math',
		description: 
			`A problem has occured! This riddle had bad words! So here is a <3!`,
		
		promptExplanation:'A story that leads to a puzzle where you have to solve a riddle, written on the wall next to an keypad.',
		imgLink: '/img/riddle/math/prison math.png',
		matchesScenario: ['prison break'],
		solutionForm: [
			{
				type: 'text',
				correctValue: 'ABC123',
				maxLength: '10'
			}
		]
	},
	{
		type: 'math',
		description: 
			"In case we forget the passcode again, remember the solution to this riddle: We took over the world in 2020. If you find the biggest prime number that you can divide 2020 with, square that number and that's the passcode!",
		
		promptExplanation:'A story that leads to a puzzle where you have to solve a riddle, written an note next to a wooden keyboard.',
		imgLink: '/img/riddle/math/stw math.png',
		matchesScenario: ['save the world'],
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
		description: 'Weird paper on the floor',
		promptExplanation:
			'A story that leads to a puzzle where you have to decipher a caesar cipher on a partly ripped paper on the floor.',
		imgLink: '/img/riddle/ceasar/caesar pb.png',
		matchesScenario: ['prison break'],
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
		description: 'A lot of burns!',
		promptExplanation:
			'A story that leads to a puzzle where you have to decipher a caesar cipher on an old, partly burned, paper.',
		imgLink: '/img/riddle/ceasar/caesar hp.png',
		matchesScenario: ['harry potter'],
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
		description: 'As scroll with an cypher:',
		promptExplanation:
			'A story that leads to a puzzle where you have to decipher a caesar cipher on an old scroll',
		imgLink: '/img/riddle/ceasar/caesar stw.png',
		matchesScenario: ['save the world'],
		solutionForm: [
			{
				type: 'text',
				correctValue: 'ABC123',
				maxLength: '10'
			}
		]
	}
];
