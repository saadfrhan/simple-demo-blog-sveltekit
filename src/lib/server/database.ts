import { premadeBlogPosts } from '$lib/data';
import type { AdditionalPostInfo, Post } from '../../types';

const db = new Map<string, Post & AdditionalPostInfo>();

export const create = async ({
	title,
	slug,
	content,
	createdAt,
	excerpt
}: Omit<Post & AdditionalPostInfo, 'id'>) => {
	const id = db.size + 1;
	db.set(slug, {
		id,
		slug,
		title,
		content,
		createdAt,
		excerpt
	});
};

export const get = async (slug: string) => {
	return db.get(slug);
};

export const getAll = async () => {
	db.set(premadeBlogPosts[0].slug, premadeBlogPosts[0]);
	const result = Array.from(db.values());
	return [...result];
};
