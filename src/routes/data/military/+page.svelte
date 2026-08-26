<script>
  import MilitaryForm from "$lib/components/military-form.svelte";

  let { data } = $props();
</script>

<div class="flex items-center justify-center min-h-screen">
  <MilitaryForm data={data.military} />
</div>
