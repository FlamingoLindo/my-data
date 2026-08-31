<script>
  import EmailsForm from "$lib/components/emails-form.svelte";
  import Goback from "$lib/components/ui/goback/goback.svelte";

  let { data } = $props();
</script>

<div class="relative flex min-h-screen items-center justify-center p-6">
  <Goback />

  <EmailsForm email={data.email} />
</div>
