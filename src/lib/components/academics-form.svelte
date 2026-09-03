<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import {
    FieldGroup,
    Field,
    FieldLabel,
  } from "$lib/components/ui/field/index.js";
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectGroupHeading,
    SelectItem,
    SelectTrigger,
  } from "$lib/components/ui/select";
  import type { IAcademics } from "$lib/interfaces/academics.interface";
  import { m } from "$lib/paraglide/messages";
  import { flattenObject } from "$lib/utils/fieldLabelMaker";

  const items = [
    { label: "UMC", value: "umc" },
    { label: "IPÊ", value: "ipe" },
  ];

  let { data }: { data: IAcademics } = $props();

  const id = $props.id();

  let selected = $state("umc");

  const selectedLabel = $derived(
    items.find((i) => i.value === selected)?.label ?? m["selectAcademyType"](),
  );

  const fields = $derived(
    flattenObject(selected === "umc" ? data.umc : data.ipe),
  );

  function isDiplomaLinkField(fieldPath: string) {
    return selected === "umc" && fieldPath === "diplomaLink";
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
          <SelectGroupHeading>{m["academicType"]()}</SelectGroupHeading>
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
          {#if isDiplomaLinkField(field.path)}
            <Field>
              <a
                href={String(field.value)}
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm underline hover:text-primary"
              >
                <FieldLabel for="{field.path}-{id}">
                  {field.label}
                </FieldLabel>
              </a>
            </Field>
          {:else}
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
          {/if}
        {/each}
      </FieldGroup>
    </form>
  </Card.Content>
</Card.Root>
