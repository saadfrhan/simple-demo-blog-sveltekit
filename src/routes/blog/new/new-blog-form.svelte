<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm, fileProxy } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import * as Card from '$lib/components/ui/card';
	import { toast } from 'svelte-sonner';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
		dataType: 'json',
		onSubmit() {
			toast.success('Blog post created successfully');
		}
	});

	const { form: formData, enhance } = form;
</script>

<div class="min-h-[85dvh] space-y-4">
	<Card.Title>Create a new blog post</Card.Title>
	<Card.Description>Please fill out the form below to create a new blog post.</Card.Description>
	<form method="POST" use:enhance enctype="multipart/form-data">
		<Form.Field {form} name="title">
			<Form.Control let:attrs>
				<Form.Label
					>Title
					{#if !formSchema.shape.title.isOptional}
						<span class="text-destructive"> *</span>
					{/if}
				</Form.Label>
				<Input {...attrs} bind:value={$formData.title} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="content">
			<Form.Control let:attrs>
				<Form.Label
					>Content {#if !formSchema.shape.content.isOptional}
						<span class="text-destructive"> *</span>
					{/if}</Form.Label
				>
				<Textarea rows={6} {...attrs} bind:value={$formData.content} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="excerpt">
			<Form.Control let:attrs>
				<Form.Label
					>Excerpt {#if !formSchema.shape.title.isOptional}
						<span class="text-destructive"> *</span>
					{/if}</Form.Label
				>
				<Textarea rows={3} {...attrs} bind:value={$formData.excerpt} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button class="mt-4 w-full">Create</Form.Button>
	</form>
</div>
