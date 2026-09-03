<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import {
    FieldGroup,
    Field,
    FieldLabel,
  } from "$lib/components/ui/field/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { enhance } from "$app/forms";

  const id = $props.id();
  let { form } = $props();
</script>

<Card.Root class="mx-auto w-full max-w-sm">
  <Card.Content>
    <form method="POST" use:enhance>
      <FieldGroup>
        <Field>
          <FieldLabel for="username-{id}">Username</FieldLabel>
          <Input id="username-{id}" name="username" required />
        </Field>
        <Field>
          <FieldLabel for="password-{id}">Password</FieldLabel>
          <Input id="password-{id}" name="password" type="password" required />
        </Field>
        <Field>
          <Button type="submit" class="w-full">Login</Button>
        </Field>
      </FieldGroup>
    </form>
    {#if form?.message}
      <p class="text-sm text-red-500 mt-2">{form.message}</p>
    {/if}
  </Card.Content>
</Card.Root>