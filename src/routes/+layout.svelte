<script>
	import { buttonVariants } from '$lib/components/ui/button';
	import '../app.pcss';
</script>

<header>
	<nav class="mb-16 flex gap-3 tracking-tight">
		<a
			href="/"
			class={buttonVariants({
				variant: 'secondary'
			})}>Home</a
		>
		<a
			href="/about"
			class={buttonVariants({
				variant: 'secondary'
			})}>About</a
		>
	</nav>
</header>
<main class="pt-4">
	<slot />
</main>
