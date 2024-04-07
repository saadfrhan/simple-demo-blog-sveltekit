export interface Post {
	title: string;
	content: string;
}

export interface AdditionalPostInfo {
	id: number;
	slug: string;
	createdAt: Date;
	excerpt: string;
}
