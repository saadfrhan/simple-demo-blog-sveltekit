import { getAll } from '$lib/server/database';

export async function load() {
	const data = await getAll();
	const _posts = Array.from(data);

	if (_posts) {
		// Convert each post to a plain JavaScript object
		const posts = _posts.map((post) => {
			return {
				slug: post.slug,
				title: post.title,
				content: post.content,
				createdAt: post.createdAt instanceof Date ? post.createdAt.toISOString() : post.createdAt
			};
		});

		return { posts };
	}
}
