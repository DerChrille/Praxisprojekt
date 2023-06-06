<script>
	import { goto } from '$app/navigation';
</script>

<h1>Welcome!</h1>
<h2>Do you want to proceed?</h2>

<button
	on:click={() => {
		goto('/generator');
	}}
	class="button">Start</button
>

<style>
	h1 {
		font-size: 10rem;
	}
	h2 {
		text-align: center;
		font-size: 3rem;
	}
</style>
