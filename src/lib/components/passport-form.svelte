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

  import type {
    IPassportBR,
    IPassportPT,
  } from "$lib/interfaces/passport.interface";
  import { m } from "$lib/paraglide/messages";
  import { copyData } from "$lib/utils/copyData.svelte";
  import { flattenObject } from "$lib/utils/fieldLabelMaker";

  const items = [
    { label: m["brazilian"](), value: "br" },
    { label: m["portuguese"](), value: "pt" },
  ];

  let {
    passport,
    ptPassport,
  }: { passport: IPassportBR; ptPassport: IPassportPT } = $props();

  const id = $props.id();

  const { copyText } = copyData();

  let selected = $state("br");

  const selectedLabel = $derived(
    items.find((i) => i.value === selected)?.label ?? m["selectPassport"](),
  );

  const fields = $derived(
    selected === "br"
      ? flattenObject((({ passportBrFilePath, ...rest }) => rest)(passport))
      : flattenObject((({ passportPtFilePath, ...rest }) => rest)(ptPassport)),
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
          <SelectGroupHeading>{m["passport"]()}</SelectGroupHeading>
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

    <br />

    <div class="w-full rounded-lg border overflow-hidden">
      <iframe
        title="Passport"
        src={selected === "br"
          ? passport.passportBrFilePath
          : ptPassport.passportPtFilePath}
        width="100%"
        height="400"
        style="border:0;"
        loading="lazy"
      ></iframe>
    </div>
  </Card.Content>
</Card.Root>
