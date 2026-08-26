<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "$lib/components/ui/button/button.svelte";
  import Icon from "@iconify/svelte";

  interface IMenuBtns {
    id: number;
    address: string;
    name: string;
    icon: string;
  }

  const menuBtns: IMenuBtns[] = [
    {
      id: 0,
      address: "/general",
      name: "General",
      icon: "bi:person-standing",
    },
    {
      id: 1,
      address: "/address",
      name: "Address",
      icon: "ant-design:home-filled",
    },
    {
      id: 2,
      address: "/work",
      name: "Work",
      icon: "arcticons:digital-work-wallet",
    },
    {
      id: 3,
      address: "/military",
      name: "Military",
      icon: "fluent-emoji-high-contrast:military-helmet",
    },
    {
      id: 4,
      address: "/socials",
      name: "Socials",
      icon: "fluent-mdl2:web-environment",
    },
    {
      id: 5,
      address: "/driver",
      name: "Driver",
      icon: "fa:drivers-license",
    },
    {
      id: 6,
      address: "/passport",
      name: "Passport",
      icon: "fa-solid:passport",
    },
    {
      id: 6,
      address: "/health",
      name: "Health",
      icon: "game-icons:health-normal",
    },
    {
      id: 7,
      address: "/academic",
      name: "Academic",
      icon: "fa-solid:graduation-cap",
    },
    {
      id: 8,
      address: "/emails",
      name: "Emails",
      icon: "bitcoin-icons:email-filled",
    },
  ];
</script>

<div class="flex items-center justify-center min-h-screen">
  <div class="grid grid-cols-3 gap-3 w-fit">
    {#each menuBtns as btn}
      <Button
        size="icon"
        class="size-40 flex-col gap-1 h-auto cursor-pointer border-2 border-white hover:bg-blue"
        onclick={() => goto(btn.address)}
      >
        <Icon icon={btn.icon} class="size-28" />
        <span class="text-2xl">{btn.name}</span>
      </Button>
    {/each}
  </div>
</div>
