<script>
  import AcademicsForm from "$lib/components/academics-form.svelte";
  import Goback from "$lib/components/ui/goback/goback.svelte";

  let { data } = $props();
</script>

<div class="relative flex min-h-screen items-center justify-center p-6">
  <Goback />

  <AcademicsForm data={data.academics} />
</div>
