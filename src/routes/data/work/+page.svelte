<script>
  import WorkForm from "$lib/components/work-form.svelte";
  let { data } = $props();
</script>

<div class="flex items-center justify-center min-h-screen">
  <WorkForm data={data.work} />
</div>
