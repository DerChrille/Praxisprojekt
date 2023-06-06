<script>
	import { roomAmount, generatorProgress } from '$lib/stores';

	$: buttonLabel = !touchedSlider
		? 'How many rooms?'
		: `Continue with ${$roomAmount} ${$roomAmount <= 1 ? 'room' : 'rooms'} `;
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

<h2>How long do you want to play?</h2>
<p>Choose the amount of puzzles you want to solve.</p>

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

<button disabled={buttonDisabed} on:click={() => $generatorProgress++}>{buttonLabel}</button>

<style>
	.slider {
		width: 100%;
		display: flex;
		align-items: center;
	}
	.slider:before {
		content: attr(data-min);
		margin-right: 1em;
		font-size: 140%;
	}
	.slider:after {
		content: attr(data-max);
		margin-left: 1em;
		font-size: 140%;
	}

	button {
		margin-top: 1em;
	}
</style>
