<script>
	import { buttonVariants } from '$lib/components/ui/button';
	import '../app.pcss';

	import { Toaster } from '$lib/components/ui/sonner';

	import { ModeWatcher } from 'mode-watcher';
	import ThemeSwitcher from '$lib/components/theme-switcher.svelte';
</script>

<Toaster />
<ModeWatcher />

<div>
	<header>
		<nav class="mb-16 flex w-full items-center justify-between tracking-tight">
			<div class="flex gap-2">
				<a href="/">home</a>
				<a href="/about">about</a>
			</div>

			<ThemeSwitcher />
		</nav>
	</header>
	<main>
		<slot />
	</main>
</div>

<style>
	@font-face {
		font-family: 'GeistVF';
		src: url('/src/assets/fonts/GeistVF.woff2') format('woff');
		font-style: normal;
	}

	* {
		font-family: 'GeistVF', sans-serif;
	}
</style>
