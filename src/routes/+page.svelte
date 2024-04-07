<script lang="ts">
	import Seo from '$lib/seo.svelte';
	import { CirclePlus } from 'lucide-svelte';

	export let data;
</script>

<h1 class="mb-8 text-2xl font-medium tracking-tighter">read my blog</h1>

<ul>
	{#if data.posts && data.posts?.length > 0}
		{#each data.posts as post}
			<li class="mb-4 space-y-1">
				<a href={`/blog/${post.slug}`}>{post.title}</a>
			</li>
		{/each}
	{:else}
		<a
			href="/blog/new"
			class="flex w-full items-center justify-center rounded-md border border-dashed p-6 duration-300 hover:bg-secondary"
		>
			<div class="flex items-center gap-2">
				<CirclePlus class="h-4 w-4" />
				<p>Create</p>
			</div>
		</a>
	{/if}
</ul>

<Seo title="Blog" description="Read my blog" type="Blog" />
