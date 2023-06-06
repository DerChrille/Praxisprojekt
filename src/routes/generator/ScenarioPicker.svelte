<script>
	import { scenario, generatorProgress } from '$lib/stores.js';

	let buttonDisabed = true;

	function selectScenario(scenarioId) {
		$scenario = scenarioId;
		buttonDisabed = undefined;
	}

	$: buttonLabel = $scenario == 0 ? 'Wähle ein Szenario' : `Weiter mit Szenario ${$scenario}`;
</script>

Shasdoljkgsdflkg
<section>
	<!-- svelte-ignore a11y-click-events-have-key-events-->
	<div class:selected={$scenario == 1} on:click={() => selectScenario(1)}>
		<img src="http://placekitten.com/500" alt="Scenario 1" />
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events-->
	<div class:selected={$scenario == 2} on:click={() => selectScenario(2)}>
		<img src="http://placekitten.com/500" alt="Scenario 2" />
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events-->
	<div class:selected={$scenario == 3} on:click={() => selectScenario(3)}>
		<img src="http://placekitten.com/500" alt="Scenario 3" />
	</div>
</section>

<button disabled={buttonDisabed} on:click={() => $generatorProgress++}>{buttonLabel}</button>

<style>
	.selected {
		outline: 3px solid red;
	}

	section {
		display: flex;
		gap: 12px;
		margin-bottom: 1em;
	}

	section div {
		flex: 1;
	}

	img {
		width: 100%;
	}
</style>
