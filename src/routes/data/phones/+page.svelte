<script>
  import PhoneForm from "$lib/components/phone-form.svelte";

  let { data } = $props();
</script>

<div class="flex items-center justify-center min-h-screen">
  <PhoneForm data={data.phone} />
</div>
