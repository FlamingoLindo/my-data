<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import {
    FieldGroup,
    Field,
    FieldLabel,
  } from "$lib/components/ui/field/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { flattenObject, type IMe } from "$lib/types/me.interface";

  let { data }: { data: IMe } = $props();

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
  </Card.Content>
</Card.Root>
