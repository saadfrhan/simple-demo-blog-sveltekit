const db = new Map();

export const create = async ({
	title,
	slug,
	content,
	createdAt
}: {
	title: string;
	slug: string;
	content: string;
	createdAt: Date;
}) => {
	db.set(slug, {
		slug,
		title,
		content,
		createdAt
	});
};

export const get = async (slug: string) => {
	return db.get(slug);
};

export const getAll = async () => {
	return db.values();
};
