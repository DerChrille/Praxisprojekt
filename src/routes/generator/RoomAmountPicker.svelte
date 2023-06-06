<script>
	import { roomAmount, generatorProgress } from '$lib/stores';

	$: buttonLabel = !touchedSlider ? 'Wie viele Räume?' : `Weiter mit ${$roomAmount} Räumen `;
	let buttonDisabed = true;

	const roomMin = 1;
	const roomMax = 5;

	// set initial value
	$roomAmount = Math.min(roomMax / 2);

	let touchedSlider = false;
	function roomAmountChosen(roomAmountId) {
		touchedSlider = true;
		$roomAmount = roomAmountId;
		buttonDisabed = undefined;
	}

	let sliderElement;
</script>

<div class="slider" data-min={roomMin} data-max={roomMax}>
	<input
		bind:this={sliderElement}
		type="range"
		min={roomMin}
		max={roomMax}
		bind:value={$roomAmount}
		class="slider"
		on:input={() => roomAmountChosen(sliderElement.value)}
	/>
</div>
Rooommanpunfasüd8ifhsd
<button disabled={buttonDisabed} on:click={() => $generatorProgress++}>{buttonLabel}</button>

<style>
	.slider {
		width: 100%;
		display: flex;
		align-items: center;
	}
	.slider:before {
		content: attr(data-min);
	}
	.slider:after {
		content: attr(data-max);
	}
</style>
