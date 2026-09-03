<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import {
    FieldGroup,
    Field,
    FieldLabel,
  } from "$lib/components/ui/field/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectGroupHeading,
    SelectItem,
    SelectTrigger,
  } from "$lib/components/ui/select";
  import type { IHealth } from "$lib/interfaces/health.interface";
  import { m } from "$lib/paraglide/messages";
  import { copyData } from "$lib/utils/copyData.svelte";
  import { flattenObject } from "$lib/utils/fieldLabelMaker";

  const items = [
    { label: m["insurance"](), value: "insurance" },
    { label: m["eye"](), value: "eye" },
    { label: m["audio"](), value: "audio" },
    { label: m["neuro"](), value: "neuro" },
    { label: m["birth"](), value: "birth" },
    { label: m["blood"](), value: "blood" },
    { label: m["allergies"](), value: "allergies" },
    { label: m["vaccines"](), value: "vaccines" },
  ] as const;

  type Category = (typeof items)[number]["value"];

  let { health }: { health: IHealth } = $props();

  const id = $props.id();

  const { copyText } = copyData();

  let selected = $state<Category>("insurance");

  const selectedLabel = $derived(
    items.find((i) => i.value === selected)?.label ?? m["selectCategory"](),
  );

  const fields = $derived(flattenObject(health[selected]));

  function isFileField(fieldPath: string) {
    return fieldPath.endsWith("Path");
  }
</script>

<Card.Root class="mx-auto w-full max-w-sm">
  <Card.Content>
    <Select type="single" bind:value={selected}>
      <SelectTrigger class="w-full max-w-48">
        {selectedLabel}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectGroupHeading>{m["healthCategory"]()}</SelectGroupHeading>
          {#each items as item}
            <SelectItem value={item.value} label={item.label}>
              {item.label}
            </SelectItem>
          {/each}
        </SelectGroup>
      </SelectContent>
    </Select>

    <br />

    <form>
      <FieldGroup>
        {#each fields as field}
          {#if isFileField(field.path)}
            <Field>
              <FieldLabel for="{field.path}-{id}">
                {field.label}
              </FieldLabel>
              <div class="w-full rounded-lg border overflow-hidden">
                <iframe
                  title={field.label}
                  src={String(field.value)}
                  width="100%"
                  height="400"
                  style="border:0;"
                  loading="lazy"
                ></iframe>
              </div>
            </Field>
          {:else}
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
          {/if}
        {/each}
      </FieldGroup>
    </form>
  </Card.Content>
</Card.Root>
