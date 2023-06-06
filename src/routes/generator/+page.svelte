<script>
	import { generatorProgress } from '$lib/stores.js';
	import ScenarioPicker from './ScenarioPicker.svelte';
	import RoomAmountPicker from './RoomAmountPicker.svelte';
	import Prompt from './Prompt.svelte';
	import FinishedRoom from './FinishedRoom.svelte';
	import PromptErklaerung from './PromptErklaerung.svelte';

	function increment() {
		$generatorProgress++;
	}
</script>

{#if $generatorProgress == 0}
	<p>Mein NAme ist LeonLessOpen</p>
	<button on:click={increment}>Start</button>
{:else if $generatorProgress == 1}
	<ScenarioPicker />
{:else if $generatorProgress == 2}
	<RoomAmountPicker />
{:else if $generatorProgress == 3}
	<PromptErklaerung />
{:else if $generatorProgress == 4}
	<Prompt />
{:else if $generatorProgress == 5}
	<FinishedRoom />
{:else}
	<p>Error</p>
{/if}
