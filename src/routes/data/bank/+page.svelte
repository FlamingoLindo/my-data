<script>
  import BankForm from "$lib/components/bank-form.svelte";

  let { data } = $props();
</script>

<div class="flex items-center justify-center min-h-screen">
  <BankForm data={data.bank} />
</div>
