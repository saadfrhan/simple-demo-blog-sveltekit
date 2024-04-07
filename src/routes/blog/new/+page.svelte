<script lang="ts">
  import type { PageData } from "./$types.js";
  import NewBlogForm from "./new-blog-form.svelte";
  export let data: PageData;
</script>
 
<NewBlogForm data={data.form} />