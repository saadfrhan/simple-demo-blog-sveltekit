import { get } from '$lib/server/database';

export function load({ params }) {
	const post = get(params.slug);

	if (post) {
		return post;
	}

	throw new Error(`Post not found`);
}
