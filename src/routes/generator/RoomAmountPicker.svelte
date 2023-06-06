<script>
	import { roomAmount, generatorProgress } from '$lib/stores';

	$: buttonLabel = $roomAmount == 0 ? 'Wie viele Räume?' : `Weiter mit ${$roomAmount} Räumen `;
	let buttonDisabed = true;

	function roomAmountChosen(roomAmountId) {
		$roomAmount = roomAmountId;
		buttonDisabed = undefined;
	}

	let sliderElement;
</script>

<input
	bind:this={sliderElement}
	type="range"
	min="1"
	max="5"
	value="1"
	class="slider"
	id="room-amount"
	on:input={() => roomAmountChosen(sliderElement.value)}
/>

Rooommanpunfasüd8ifhsd
<button disabled={buttonDisabed} on:click={() => $generatorProgress++}>{buttonLabel}</button>
