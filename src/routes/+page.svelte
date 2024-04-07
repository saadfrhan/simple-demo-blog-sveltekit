<script lang="ts">
	import Seo from '$lib/seo.svelte';
	import { CirclePlus } from 'lucide-svelte';

	export let data;
</script>

<h1 class="mb-8 text-2xl font-medium tracking-tighter">read my blog</h1>

<div class="mb-2 flex flex-col gap-y-2">
	{#if data.posts && data.posts?.length > 0}
		{#each data.posts as post}
			<a
				href={`/blog/${post.slug}`}
				data-sveltekit-preload-data={false}
				class="flex w-full items-center rounded-md border px-3 py-2 duration-300 hover:bg-secondary"
			>
				{post.title}
			</a>
		{/each}
	{/if}
</div>
<a
	href="/blog/new"
	class="flex w-full items-center justify-center rounded-md border border-dashed p-6 duration-300 hover:bg-secondary"
>
	<div class="flex items-center gap-2">
		<CirclePlus class="h-4 w-4" />
		<p>New</p>
	</div>
</a>

<Seo title="Blog" description="Read my blog" type="Blog" />
