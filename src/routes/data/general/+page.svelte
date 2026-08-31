<script>
  import GeneralForm from "$lib/components/general-form.svelte";
  import Goback from "$lib/components/ui/goback/goback.svelte";

  let { data } = $props();
</script>

<div class="relative flex min-h-screen items-center justify-center p-6">
  <Goback />

  <GeneralForm data={data.me} />
</div>
