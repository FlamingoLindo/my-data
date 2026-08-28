<script>
  import HealthForm from "$lib/components/health-form.svelte";
  let { data } = $props();
</script>

<div class="flex items-center justify-center min-h-screen">
  <HealthForm health={data.health} />
</div>
