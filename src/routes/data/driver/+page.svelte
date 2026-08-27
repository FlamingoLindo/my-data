<script>
  import DriverForm from "$lib/components/driver-form.svelte";
  let { data } = $props();
</script>

<div class="flex items-center justify-center min-h-screen">
  <DriverForm data={data.driver} />
</div>
