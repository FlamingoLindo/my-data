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
  import type { IEmail } from "$lib/interfaces/emails.interface";

  import { copyData } from "$lib/utils/copyData.svelte";
  import { flattenObject } from "$lib/utils/fieldLabelMaker";

  const items = [
    { label: "Gmail", value: "gmail" },
    { label: "Cock", value: "cock" },
  ];

  let { email }: { email: IEmail } = $props();

  const id = $props.id();

  const { copyText } = copyData();

  let selected = $state("gmail");

  const selectedLabel = $derived(
    items.find((i) => i.value === selected)?.label ?? "Select Email Type",
  );

  const fields = $derived(
    flattenObject(selected === "gmail" ? email.gmail : email.cock),
  );
</script>

<Card.Root class="mx-auto w-full max-w-sm">
  <Card.Content>
    <Select type="single" bind:value={selected}>
      <SelectTrigger class="w-full max-w-48">
        {selectedLabel}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectGroupHeading>Email Type</SelectGroupHeading>
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
