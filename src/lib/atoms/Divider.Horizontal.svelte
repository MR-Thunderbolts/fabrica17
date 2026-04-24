<script lang="ts">
	let {
		color = 'currentColor'
	}: {
		color?: string;
	} = $props();
</script>

<span class="divider-h" style:background-color={color}></span>

<style>
	.divider-h {
		display: block;
		width: 32px;
		height: 1px;
		flex-shrink: 0;
	}
</style>
