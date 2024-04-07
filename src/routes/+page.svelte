<script lang="ts">
	export let data;
</script>

<h1 class="mb-8 text-2xl font-medium tracking-tighter">read my blog</h1>

<ul>
	{#if data.posts}
		{#each data.posts as post}
			<li class="mb-4 space-y-1">
				<a href={`/blog/${post.slug}`}>{post.title}</a>
			</li>
		{/each}
	{/if}
</ul>
