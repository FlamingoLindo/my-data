<script>
  import SocialsForm from "$lib/components/socials-form.svelte";
  import Goback from "$lib/components/ui/goback/goback.svelte";

  let { data } = $props();
</script>

<div class="relative flex min-h-screen items-center justify-center p-6">
  <Goback />

  <SocialsForm data={data.socials} />
</div>
