<script>
  import PassportForm from "$lib/components/passport-form.svelte";
  import Goback from "$lib/components/ui/goback/goback.svelte";

  let { data } = $props();
</script>

<div class="relative flex min-h-screen items-center justify-center p-6">
  <Goback />

  <PassportForm passport={data.passportBr} ptPassport={data.passportPt} />
</div>
