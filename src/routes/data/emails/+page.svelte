<script>
  import EmailsForm from "$lib/components/emails-form.svelte";

  let { data } = $props();
</script>

<div class="flex items-center justify-center min-h-screen">
  <EmailsForm email={data.email} />
</div>
