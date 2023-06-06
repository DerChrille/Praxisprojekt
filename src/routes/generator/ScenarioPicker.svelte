<script>
	import { scenario, generatorProgress } from '$lib/stores.js';

	let buttonDisabed = true;

	function selectScenario(scenarioId) {
		$scenario = scenarioId;
		buttonDisabed = undefined;
	}

	$: buttonLabel = $scenario == 0 ? 'Choose a scenario' : `Continue with scenario #${$scenario}`;
</script>

<h2>Choose a scenario...</h2>
<p>Select one of the three scenarios presented.</p>

<section>
	<!-- svelte-ignore a11y-click-events-have-key-events-->
	<figure class:selected={$scenario == 1} on:click={() => selectScenario(1)}>
		<figcaption><h4>Szenario 1: XYZ</h4></figcaption>
		<img src="http://placekitten.com/500" alt="Scenario 1" />
	</figure>
	<!-- svelte-ignore a11y-click-events-have-key-events-->
	<figure class:selected={$scenario == 2} on:click={() => selectScenario(2)}>
		<figcaption><h4>Szenario 2: XYZ</h4></figcaption>
		<img src="http://placekitten.com/500" alt="Scenario 2" />
	</figure>
	<!-- svelte-ignore a11y-click-events-have-key-events-->
	<figure class:selected={$scenario == 3} on:click={() => selectScenario(3)}>
		<figcaption><h4>Szenario 3: XYZ</h4></figcaption>
		<img src="http://placekitten.com/500" alt="Scenario 3" />
	</figure>
</section>

<button disabled={buttonDisabed} on:click={() => $generatorProgress++}>{buttonLabel}</button>

<style>
	.selected > img {
		outline: 3px solid var(--color-accent);
		cursor: auto;
	}

	section {
		display: flex;
		gap: 12px;
		margin-bottom: 1em;
	}

	section figure {
		flex: 1;
		margin: 0;
	}

	figcaption h4 {
		margin: 0;
		margin-bottom: 0.3em;
		text-align: center;
	}

	img {
		width: 100%;
		transition: outline 0.1s ease-in-out;
		cursor: pointer;
	}
</style>
