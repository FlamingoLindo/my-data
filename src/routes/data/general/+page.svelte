<script>
  import GeneralForm from "$lib/components/general-form.svelte";
  let { data } = $props();
</script>

<div class="flex items-center justify-center min-h-screen">
  <GeneralForm data={data.me} />
</div>
