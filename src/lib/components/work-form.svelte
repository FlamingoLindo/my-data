<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import {
    FieldGroup,
    Field,
    FieldLabel,
  } from "$lib/components/ui/field/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import type { IWork } from "$lib/types/work.interface";

  import { copyData } from "$lib/utils/copyData.svelte";
  import { flattenObject } from "$lib/utils/fieldLabelMaker";

  let { data }: { data: IWork } = $props();

  const id = $props.id();

  const { copyText } = copyData();

  // Exclude contractFile from the copyable fields — it's a file path, not a data value
  const fields = $derived(flattenObject({ nisPis: data.nisPis }));
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
              type="text"
              value={field.value}
              readonly
            />
          </Field>
        {/each}
      </FieldGroup>
    </form>

    <br />

    <div class="w-full rounded-lg border overflow-hidden">
      <iframe
        title="Work Contract"
        src={data.contractFile}
        width="100%"
        height="400"
        style="border:0;"
        loading="lazy"
      ></iframe>
    </div>
  </Card.Content>
</Card.Root>
