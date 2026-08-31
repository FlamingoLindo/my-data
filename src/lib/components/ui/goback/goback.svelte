<script>
  import Icon from "@iconify/svelte";
  import Button from "../button/button.svelte";
</script>

<div class="fixed left-4 top-4 z-50">
  <Button
    href="/menu"
    variant="outline"
    size="icon"
    class="h-11 w-11 rounded-full border-white/20 bg-background/80 shadow-sm backdrop-blur-sm hover:bg-muted"
    aria-label="Go back to menu"
  >
    <Icon icon="material-symbols:arrow-back-rounded" class="size-5" />
  </Button>
</div>