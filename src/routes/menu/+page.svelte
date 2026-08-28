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
      address: "/data/general",
      name: "General",
      icon: "bi:person-standing",
    },
    {
      id: 1,
      address: "/data/address",
      name: "Address",
      icon: "ant-design:home-filled",
    },
    {
      id: 2,
      address: "/data/work",
      name: "Work",
      icon: "arcticons:digital-work-wallet",
    },
    {
      id: 3,
      address: "/data/military",
      name: "Military",
      icon: "fluent-emoji-high-contrast:military-helmet",
    },
    {
      id: 4,
      address: "/data/socials",
      name: "Socials",
      icon: "fluent-mdl2:web-environment",
    },
    {
      id: 5,
      address: "/data/driver",
      name: "Driver",
      icon: "fa:drivers-license",
    },
    {
      id: 6,
      address: "/data/passport",
      name: "Passport",
      icon: "fa-solid:passport",
    },
    {
      id: 6,
      address: "/data/health",
      name: "Health",
      icon: "game-icons:health-normal",
    },
    {
      id: 7,
      address: "/data/academics",
      name: "Academics",
      icon: "fa-solid:graduation-cap",
    },
    {
      id: 8,
      address: "/data/emails",
      name: "Emails",
      icon: "bitcoin-icons:email-filled",
    },
    {
      id: 9,
      address: "/data/bank",
      name: "Bank",
      icon: "bitcoin-icons:bank-filled",
    },
    {
      id: 10,
      address: "/data/phones",
      name: "Phones",
      icon: "boxicons:phone-filled",
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
