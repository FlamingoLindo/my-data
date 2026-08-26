<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import {
    FieldGroup,
    Field,
    FieldLabel,
  } from "$lib/components/ui/field/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { flattenObject, type IAddress } from "$lib/types/me.interface";

  let { data, mapsEmbedUrl }: { data: IAddress; mapsEmbedUrl: string } =
    $props();

  const id = $props.id();

  let copiedPath = $state<string | null>(null);

  async function copyText(textToCopy: string, path: string) {
    try {
      await navigator.clipboard.writeText(textToCopy);
      copiedPath = path;
      setTimeout(() => {
        if (copiedPath === path) copiedPath = null;
      }, 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }

  const fields = $derived(flattenObject(data));
</script>

<Card.Root class="mx-auto w-full max-w-sm">
  <Card.Content>
    <form>
      <FieldGroup>
        {#each fields as field}
          <Field>
            <FieldLabel for="{field.path}-{id}">{field.label}</FieldLabel>
            <Input
              onclick={() => copyText(String(field.value), field.path)}
              id="{field.path}-{id}"
              type={typeof field.value === "number" ? "number" : "text"}
              value={field.value}
              readonly
            />
          </Field>
        {/each}
      </FieldGroup>
    </form>

    <br />
    
    <iframe
      title="Google Map Embed"
      src={mapsEmbedUrl}
      width="100%"
      height="450"
      style="border:0;"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </Card.Content>
</Card.Root>
