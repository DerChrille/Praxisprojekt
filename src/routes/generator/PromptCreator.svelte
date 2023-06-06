<script>
	import { prompts, generatorProgress } from '$lib/stores';

	const maxWordLength = 30;

	const promptValues = ['', '', ''];
	const promptsValid = [true, true, true];

	function setPrompt(key) {
		promptsValid[key] = !promptValues[key].includes(' ');
		if (promptsValid[key]) $prompts[key] = promptValues[key];
	}

	let showPromptSelection = false;
</script>

<p>
	Als Nächstes dürfen Sie Ihre Story mit bis zu drei Worten selbst gestalten. Bitte verwenden Sie
	nur Wörter, keine Satzteile oder ganze Sätze.
</p>
<button disabled={showPromptSelection} on:click={() => (showPromptSelection = true)}
	>Verstanden</button
>

{#if showPromptSelection}
	<label for="prompt-0"
		>Wort 1 <input
			id="prompt-0"
			class:invalid={!promptsValid[0]}
			bind:value={promptValues[0]}
			maxlength={maxWordLength}
			type="text"
			on:input={() => setPrompt(0)}
		/></label
	>
	{#if promptValues.some((x) => x !== '')}
		<label for="prompt-1"
			>Wort 2
			<input
				id="prompt-1"
				class:invalid={!promptsValid[1]}
				bind:value={promptValues[1]}
				maxlength={maxWordLength}
				type="text"
				on:input={() => setPrompt(1)}
			/></label
		>{/if}

	{#if (promptValues[0] !== '' && promptValues[1] !== '') || promptValues[2] !== ''}<label
			for="prompt-2"
			>Wort 3
			<input
				id="prompt-2"
				class:invalid={!promptsValid[2]}
				bind:value={promptValues[2]}
				maxlength={maxWordLength}
				type="text"
				on:input={() => setPrompt(2)}
			/></label
		>{/if}

	<button disabled={!promptsValid.every((x) => x == true)} on:click={() => $generatorProgress++}
		>Fertig</button
	>
{/if}

<style>
	input.invalid {
		border: 1px solid red;
		color: red;
	}
</style>
