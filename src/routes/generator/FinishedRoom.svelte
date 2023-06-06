<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { scenario, prompts, roomAmount, generatorProgress } from '$lib/stores';

	let base64room;

	async function getChatGPTAnswers(scenario, prompts, roomAmount) {
		// TODO: Get actual answers
		// we can expect the structure to be like this:
		// <opening> <puzzle description per roomAmount> <ending>

		// fake wait time
		await new Promise((resolve) => setTimeout(resolve, 1000));

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

	async function buildRoom() {
		let obj = {};
		let chatGptAnswers = await getChatGPTAnswers($scenario, $prompts, $roomAmount);

		obj.scenario = $scenario;
		obj.roomAmount = $roomAmount;
		obj.textStructure = chatGptAnswers;

		if (browser) {
			base64room = btoa(JSON.stringify(obj));
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
{:then roomObject}
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
		}}>Fertig</button
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
