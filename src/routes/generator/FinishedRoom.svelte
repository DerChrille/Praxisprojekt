<script>
	import { PUZZLES } from '$lib/global.js';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { scenario, prompts, roomAmount, generatorProgress } from '$lib/stores';

	let base64room;

	async function getChatGPTAnswers(scenario, prompts, puzzles) {
		// TODO: Get actual answers
		// we can expect the structure to be like this:
		// <opening> <puzzle description per roomAmount> <ending>

		// fake wait time
		await new Promise((resolve) => setTimeout(resolve, 1000));

		/*
			what chatgpt actually gets:
			- the chosen scenario id (variable scenario)
			- the user-chosen prompts (variable prompts)
			- the selected puzzles (variable puzzles), for each puzzle
				- the puzzle type id (e.g. "doors")
				- puzzle description (this is not needed for chatgpt)
				- what scenario(s) this puzzle fits in
				- what the solution for the puzzle is (this is not needed for chatgpt)

			what else do we need to craft a prompt?
		*/

		let obj = {
			opening: `bla bla opening w/ scenario ${scenario} and prompts ${Object.values(prompts).join(
				', '
			)}`,
			ending: 'bla bla ending',
			puzzleDescriptions: []
		};
		for (let i = 0; i < puzzles.length; i++) {
			obj.puzzleDescriptions.push(
				`bla bla introducing room #${i}. we transition into a puzzle of type "${puzzles[i].type}"`
			);
		}

		return obj;
	}

	function choosePuzzles(scenario, amount) {
		const typesAdded = new Set();
		const puzzleChoices = structuredClone(PUZZLES);
		const puzzles = [];

		// remove puzzles that don't fit the scenario
		for (let i = puzzleChoices.length - 1; i >= 0; i--) {
			if (!puzzleChoices[i].matchesScenario.includes(scenario)) {
				puzzleChoices.splice(i, 1);
			}
		}

		// add one at random, logging the type to make sure we only have unique types
		// keep in mind to avoid infinite loops if we dont have enough puzzles for the amount we want
		const maxTries = puzzleChoices.length;
		for (let i = 0; i <= maxTries; i++) {
			const randomIndex = Math.floor(Math.random() * puzzleChoices.length);
			console.log(randomIndex, puzzles);
			const randomPuzzle = puzzleChoices[randomIndex];

			if (randomPuzzle === undefined) {
				// we ran out of puzzles
				break;
			}

			if (!typesAdded.has(randomPuzzle.type)) {
				typesAdded.add(randomPuzzle.type);
				puzzles.push(randomPuzzle);
				puzzleChoices.splice(randomIndex, 1);
			}

			if (puzzles.length >= amount) {
				break;
			}
		}

		if (puzzles.length != amount) {
			console.error("Couldn't find enough puzzles for the amount of rooms");
		}

		return puzzles;
	}

	async function buildRoom() {
		let obj = {};
		let puzzles = choosePuzzles($scenario, $roomAmount);
		let chatGptAnswers = await getChatGPTAnswers($scenario, $prompts, puzzles);

		obj.scenario = $scenario;
		obj.roomAmount = parseInt($roomAmount, 10);
		obj.texts = {
			opening: chatGptAnswers.opening,
			ending: chatGptAnswers.ending
		};
		obj.generationTime = Date.now();
		obj.puzzles = puzzles;

		if (browser) {
			base64room = window.btoa(JSON.stringify(obj));
			localStorage.setItem('last-room', base64room);
		}

		return obj;
	}
</script>

{#await buildRoom()}
	<div class="loader">
		<h3>Building escape room ...</h3>
		<div class="lds-dual-ring" />
	</div>
{:then}
	<h2>Done!</h2>
	<p>
		Your escape room was created. Please copy the text below if you want to share it with your
		friends. Click the Play button below to play your escape room.
	</p>

	<textarea rows="15" value={base64room} disabled />

	<button
		on:click={() => {
			$generatorProgress = 0;
			goto('/play');
		}}>Play!</button
	>
{:catch error}
	<p>There was an error: <code>{error.message}</code></p>
{/await}

<style>
	.loader {
		text-align: center;
	}

	button {
		margin-top: 0.5em;
	}

	/* spinner via https://loading.io/css/ */
	.lds-dual-ring {
		display: inline-block;
		width: 80px;
		height: 80px;
	}
	.lds-dual-ring:after {
		content: ' ';
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid var(--color-accent);
		border-color: var(--color-accent) transparent var(--color-accent) transparent;
		animation: lds-dual-ring 1.2s linear infinite;
	}
	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
