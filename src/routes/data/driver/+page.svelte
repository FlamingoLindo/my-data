<script>
  import DriverForm from "$lib/components/driver-form.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import Goback from "$lib/components/ui/goback/goback.svelte";
  import Icon from "@iconify/svelte";

  let { data } = $props();
</script>

<div class="relative flex min-h-screen items-center justify-center p-6">
  <Goback />

  <DriverForm data={data.driver} />
</div>
