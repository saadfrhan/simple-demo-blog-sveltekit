<script lang="ts">
	import Seo from '$lib/seo.svelte';
	import type { PageData } from './$types.js';
	import NewBlogForm from './new-blog-form.svelte';
	export let data: PageData;
</script>

<NewBlogForm data={data.form} />

<Seo title="New Blog" description="Create a new blog post" type="Article" />
