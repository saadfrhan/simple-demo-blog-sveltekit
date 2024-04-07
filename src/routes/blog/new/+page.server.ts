import { create } from '$lib/server/database';
import { redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad, Actions } from './$types.js';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		const args = {
			title: form.data.title,
			content: form.data.content,
			slug: form.data.title.toLowerCase().replace(/\s+/g, '-'),
			createdAt: new Date()
		};
		create(args);
		throw redirect(303, `/blog/${args.slug}`);
	}
};

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};
