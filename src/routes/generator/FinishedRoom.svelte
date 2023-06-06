<script>
	import { goto } from '$app/navigation';
	import { scenario, prompts, roomAmount, generatorProgress } from '$lib/stores';

	function getChatGPTAnswers(scenario, prompts, roomAmount) {
		// TODO: Get actual answers
		// we can expect the structure to be like this:
		// <opening> <puzzle description per roomAmount> <ending>

		let obj = {
			opening: `bla bla opening w/ scenario ${scenario} and prompts ${Object.values(prompts).join(
				', '
			)}`,
			ending: 'bla bla ending',
			puzzleDescriptions: []
		};
		for (let i = 0; i < roomAmount; i++) {
			obj.puzzleDescriptions.push(`bla bla room ${i}`);
		}

		return obj;
	}

	function buildRoom() {
		let obj = {};
		let chatGptAnswers = getChatGPTAnswers($scenario, $prompts, $roomAmount);

		obj.scenario = $scenario;
		obj.roomAmount = $roomAmount;
		obj.textStructure = chatGptAnswers;

		return obj;
	}

	const roomObject = buildRoom();
</script>

{JSON.stringify(roomObject)}

<textarea rows="40" value={btoa(JSON.stringify(roomObject))} />

<button
	on:click={() => {
		$generatorProgress = 0;
		goto('/play');
	}}>Fertig</button
>
