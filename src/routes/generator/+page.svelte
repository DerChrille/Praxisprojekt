<script>
	import { generatorProgress } from '$lib/stores.js';
	import ScenarioPicker from './ScenarioPicker.svelte';
	import RoomAmountPicker from './RoomAmountPicker.svelte';
	import PromptCreator from './PromptCreator.svelte';
	import FinishedRoom from './FinishedRoom.svelte';
</script>

{#if $generatorProgress == 0}
	<p>Starte den Generator</p>
	<button on:click={() => $generatorProgress++}>Start</button>
{:else if $generatorProgress == 1}
	<ScenarioPicker />
{:else if $generatorProgress == 2}
	<RoomAmountPicker />
{:else if $generatorProgress == 3}
	<PromptCreator />
{:else if $generatorProgress == 4}
	<FinishedRoom />
{/if}
