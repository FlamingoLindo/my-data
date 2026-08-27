<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import type { IMilitary } from "$lib/interfaces/military.interface";

  let { data }: { data: IMilitary } = $props();

  const id = $props.id();
</script>

<Card.Root class="mx-auto w-full max-w-sm">
  <Card.Content>
    <!-- <br /> -->
    <div class="w-full rounded-lg border overflow-hidden">
      <iframe
        title="Work Contract"
        src={data.militaryFile}
        width="100%"
        height="400"
        style="border:0;"
        loading="lazy"
      ></iframe>
    </div>
  </Card.Content>
</Card.Root>
