<script>
	import { prompt1, prompt2, prompt3, generatorProgress } from '$lib/stores';
	let prompt1text;
	let prompt2text;
	let prompt3text;
	function prompt1Chosen(prompt1val) {
		$prompt1 = prompt1val;
	}
	function prompt2Chosen(prompt2val) {
		$prompt2 = prompt2val;
	}
	function prompt3Chosen(prompt3val) {
		$prompt3 = prompt3val;
	}
</script>

Prompts
<input bind:this={prompt1text} type="text" on:input={() => prompt1Chosen(prompt1text.value)} />
<input bind:this={prompt2text} type="text" on:input={() => prompt2Chosen(prompt2text.value)} />
<input bind:this={prompt3text} type="text" on:input={() => prompt3Chosen(prompt3text.value)} />

<button on:click={() => $generatorProgress++}>Fertig</button>
