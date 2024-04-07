<script lang="ts">
	export let data;
</script>

<main>
	<h1 class="title max-w-[650px] text-2xl font-medium tracking-tighter">{data.title}</h1>
	<p class="mb-8 mt-2 text-sm text-neutral-600 dark:text-neutral-400">
		Published on {new Date(data.createdAt).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</p>
	<p class="prose prose-lg prose-invert">{@html data.content}</p>
</main>
