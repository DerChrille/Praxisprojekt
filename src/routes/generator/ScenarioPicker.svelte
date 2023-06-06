<script>
	import { scenario, generatorProgress } from '$lib/stores.js';

	let buttonDisabed = true;

	function scenarioChosen(scenarioId) {
		$scenario = scenarioId;
		buttonDisabed = undefined;
	}

	$: buttonLabel = $scenario == 0 ? 'Wähle ein Szenario' : `Weiter mit Szenario ${$scenario}`;
</script>

Shasdoljkgsdflkg
<div>
	<img src="http://placekitten.com/500" alt="Scenario1" on:click={() => scenarioChosen(1)} />
</div>
<div>
	<img src="http://placekitten.com/500" alt="Scenario2" on:click={() => scenarioChosen(2)} />
</div>
<div>
	<img src="http://placekitten.com/500" alt="Scenario3" on:click={() => scenarioChosen(3)} />
</div>
<button disabled={buttonDisabed} on:click={() => $generatorProgress++}>{buttonLabel}</button>
