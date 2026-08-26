<script>
  import AddressForm from "$lib/components/address-form.svelte";
  let { data } = $props();
</script>

<div class="flex items-center justify-center min-h-screen">
  <AddressForm data={data.address} mapsEmbedUrl={data.mapsEmbedUrl} />
</div>
