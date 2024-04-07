<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let description: string;
	export let type: string;

	$: url = $page.url.href;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	{@html `<script type="application/ld+json">
{
    "@context": "http://schema.org",
    "@type": "${type}",
      "name": "${title}",
      "description": "${description}",
      "url": "${url}",
    }
  </script>`}
</svelte:head>
