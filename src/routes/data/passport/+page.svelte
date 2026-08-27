<script>
  import PassportForm from "$lib/components/passport-form.svelte";

  let { data } = $props();
</script>

<div class="flex items-center justify-center min-h-screen">
  <PassportForm passport={data.passportBr} ptPassport={data.passportPt} />
</div>
