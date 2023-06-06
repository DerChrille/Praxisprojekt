<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { currentRoomPlaying, generatorProgress } from '$lib/stores';
	import { goto } from '$app/navigation';

	let input = '';
	let feedback = '';

	let escapeRoomObject = undefined;

	let debounceTimeout;
	const debounce = (cb, ms) => {
		clearTimeout(debounceTimeout);
		debounceTimeout = setTimeout(() => {
			cb();
		}, ms);
	};

	const convertBase64 = (str) => (browser ? window.atob(str) : '');

	onMount(() => {
		// clicking on play invalidates anything in the generator
		$generatorProgress = 0;

		feedback = 'Please enter escape room code...';
		if (browser) {
			// try loading from LS
			if (localStorage.getItem('last-room')) {
				input = localStorage.getItem('last-room');
				const valid = checkValidCode();
				if (valid) {
					feedback = `Successfully auto-loaded escape room from <em>${convertDate(
						escapeRoomObject.generationTime
					)}</em>:`;
				}
			}
		}
	});

	function checkValidCode() {
		if (input == '') {
			escapeRoomObject = undefined;
			feedback = 'Please enter escape room code...';
			return false;
		}

		try {
			escapeRoomObject = JSON.parse(convertBase64(input));
			feedback = `Successfully loaded escape room from <em>${convertDate(
				escapeRoomObject.generationTime
			)}</em>:`;
		} catch (e) {
			escapeRoomObject = undefined;
			feedback = 'Invalid escape room code!';
			return false;
		}
		return true;
	}

	function convertDate(ts) {
		return new Date(ts).toLocaleDateString('en-US', {
			//dateStyle: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			timeZone: 'Europe/Berlin',
			hourCycle: 'h23'
		});
	}

	function playButton() {
		$currentRoomPlaying = escapeRoomObject;
		goto('/play/room');
	}
</script>

<h2>Play your escape room!</h2>

<p>
	Please paste your escape room code below. If you don't have a code, you can <a href="/generator"
		>generate</a
	> one here.
</p>

{#if feedback != ''}
	<p in:fade class="feedback">
		<!-- svelte-ignore no-at-html-tags -->
		{@html feedback}
	</p>
{:else}
	<p class="feedback">&nbsp;</p>
{/if}
<textarea
	rows="15"
	on:input={() => {
		// debounce so feedback can catch up
		debounce(checkValidCode, 50);
	}}
	bind:value={input}
/>

<button disabled={escapeRoomObject === undefined} on:click={playButton}>Play!</button>

<style>
	.feedback {
		margin-bottom: 0;
	}

	button {
		margin-top: 0.5em;
	}
</style>
