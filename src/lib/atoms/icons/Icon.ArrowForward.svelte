<script lang="ts">
	let {
		width = "20",
		height = "20",
		style = ""
	}: {
		width?: string | number;
		height?: string | number;
		style?: string;
	} = $props();
</script>

<svg 
	xmlns="http://www.w3.org/2000/svg" 
	{width} 
	{height} 
	{style} 
	viewBox="0 0 24 24"
>
	<path 
		fill="currentColor" 
		d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.275t-.713-.3q-.3-.3-.3-.712t.3-.713z"
	/>
</svg>
