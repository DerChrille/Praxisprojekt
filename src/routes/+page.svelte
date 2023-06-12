<script>
	import { generatorProgress } from '$lib/stores.js';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		$generatorProgress = 0;
	});
</script>

<h1>Welcome!</h1>
<p>Welcome to <em>Escape Room Generator</em>. What do you want to do?</p>

<div>
	<button on:click={() => goto('/generator')}>Generate</button>
	<button on:click={() => goto('/play')}>Play</button>
</div>

<style>
	h1 {
		text-align: center;
	}

	div {
		display: flex;
		width: 100%;
		justify-content: center;
		gap: 8px;
	}

	div button {
		flex: 1;
	}
</style>
