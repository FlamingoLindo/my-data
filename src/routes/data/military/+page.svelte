<script>
  import MilitaryForm from "$lib/components/military-form.svelte";
  import Goback from "$lib/components/ui/goback/goback.svelte";

  let { data } = $props();
</script>

<div class="relative flex min-h-screen items-center justify-center p-6">
  <Goback />

  <MilitaryForm data={data.military} />
</div>
