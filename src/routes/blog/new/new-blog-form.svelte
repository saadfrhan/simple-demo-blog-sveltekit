<script lang="ts">
  import * as Form from "$lib/components/ui/form";
	import { Input } from "$lib/components/ui/input";
	import { Textarea } from "$lib/components/ui/textarea";
  import { formSchema, type FormSchema } from "./schema";
  import {
    type SuperValidated,
    type Infer,
    superForm,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
	  import * as Card from "$lib/components/ui/card";
 
  export let data: SuperValidated<Infer<FormSchema>>;
 
  const form = superForm(data, {
    validators: zodClient(formSchema),
		dataType: "json",
  });
 
  const { form: formData, enhance } = form;
</script>

<div class="flex justify-center items-center min-h-[85dvh]">
	<Card.Root>
  <Card.Header>
    <Card.Title>
			Create a new blog post
		</Card.Title>
    <Card.Description>
			Please fill out the form below to create a new blog post.
		</Card.Description>
  </Card.Header>
	<form method="POST" use:enhance>
  <Card.Content>
  <Form.Field {form} name="title">
    <Form.Control let:attrs>
      <Form.Label>Title</Form.Label>
      <Input {...attrs} bind:value={$formData.title} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
	<Form.Field {form} name="content">
		<Form.Control let:attrs>
			<Form.Label>Content</Form.Label>
			<Textarea rows={6} {...attrs} bind:value={$formData.content} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
</Card.Content>
<Card.Footer>
	<Form.Button class="w-full">Create</Form.Button>
</Card.Footer>
</form>
</Card.Root>
</div>