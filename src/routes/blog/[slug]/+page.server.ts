import { get } from '$lib/server/database';
import type { Post, AdditionalPostInfo } from '../../../types/index.js';

export async function load({ params }): Promise<Post & AdditionalPostInfo> {
	const post = await get(params.slug);

	if (post) {
		return post;
	}

	throw new Error(`Post not found`);
}
