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

  const id = $props.id();
</script>

<Card.Root class="mx-auto w-full max-w-sm">
  <Card.Content>
    <form>
      <FieldGroup>
        <Field>
          <FieldLabel for="email-{id}">Email</FieldLabel>
          <Input id="email-{id}" type="email" required />
        </Field>
        <Field>
          <div class="flex items-center">
            <FieldLabel for="password-{id}">Password</FieldLabel>
            <!-- <a href="##" class="ms-auto inline-block text-sm underline"> Forgot your password? </a> -->
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
