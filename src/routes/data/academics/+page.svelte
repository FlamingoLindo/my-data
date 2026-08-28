<script>
  import AcademicsForm from "$lib/components/academics-form.svelte";
  let { data } = $props();
</script>

<div class="flex items-center justify-center min-h-screen">
  <AcademicsForm data={data.academics} />
</div>
