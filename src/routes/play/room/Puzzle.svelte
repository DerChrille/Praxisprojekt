<script>
	import { fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { sleep } from '$lib/helper.js';

	export let puzzle;
	let showNotCorrect = false;

	let elInputs = [];

	const dispatch = createEventDispatcher();

	async function checkSolution() {
		let allCorrect = true;
		for (let input of elInputs) {
			if (
				input.value.toLowerCase().trim() !==
				puzzle.solutionForm[input.dataset.id].correctValue.toLowerCase()
			) {
				allCorrect = false;
			}
		}
		if (allCorrect) {
			dispatch('correct');
		} else {
			showNotCorrect = true;
			await sleep(1000);
			showNotCorrect = false;
		}
	}
</script>

<p>{puzzle.description}</p>

<img src={puzzle.imgLink} alt={puzzle.type} />

<form>
	{#each puzzle.solutionForm as form, i}
		<label for={form.type}>
			Answer{puzzle.solutionForm.length > 1 ? ` ${i}` : ''}:&nbsp;
			<input
				type={form.type}
				maxlength={form.maxLength}
				bind:this={elInputs[i]}
				data-id={i}
			/></label
		>
		{#if showNotCorrect}<span transition:fly={{ y: 20, duration: 100 }} class="not-correct"
				>Incorrect</span
			>{/if}
		<button on:click={async () => await checkSolution()} type="button">Check</button>
	{/each}
</form>

<style>
	form {
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 8px;
		position: relative;
	}

	label {
		display: flex;
		align-items: center;
		margin-top: 1em;
		justify-content: center;
	}

	input {
		width: 20ch;
	}

	button {
		display: block;
	}

	.not-correct {
		position: absolute;
		right: 10px;
	}
</style>
