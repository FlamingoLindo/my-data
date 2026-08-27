<script>
  import SocialsForm from "$lib/components/socials-form.svelte";
  let { data } = $props();
</script>

<div class="flex items-center justify-center min-h-screen">
  <SocialsForm data={data.socials} />
</div>
