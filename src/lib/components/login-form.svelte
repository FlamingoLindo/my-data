<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import {
    FieldGroup,
    Field,
    FieldLabel,
    FieldDescription,
  } from "$lib/components/ui/field/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { goto } from "$app/navigation";

  const id = $props.id();

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    goto("/menu");
  }
</script>

<Card.Root class="mx-auto w-full max-w-sm">
  <Card.Content>
    <form onsubmit={handleSubmit}>
      <FieldGroup>
        <Field>
          <FieldLabel for="email-{id}">Email</FieldLabel>
          <Input id="email-{id}" type="email" required />
        </Field>
        <Field>
          <div class="flex items-center">
            <FieldLabel for="password-{id}">Password</FieldLabel>
          </div>
          <Input id="password-{id}" type="password" required />
        </Field>
        <Field>
          <Button type="submit" class="w-full">Login</Button>
        </Field>
      </FieldGroup>
    </form>
  </Card.Content>
</Card.Root>
