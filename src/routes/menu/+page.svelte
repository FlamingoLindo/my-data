<script lang="ts">
  import { goto } from "$app/navigation";
  import LanguageToggle from "$lib/components/language-toggle.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import Icon from "@iconify/svelte";
  import { m } from "$lib/paraglide/messages";

  interface IMenuBtns {
    id: number;
    address: string;
    name: () => string;
    icon: string;
  }

  const menuBtns: IMenuBtns[] = [
    {
      id: 0,
      address: "/data/general",
      name: m.menuGeneral,
      icon: "bi:person-standing",
    },
    {
      id: 1,
      address: "/data/address",
      name: m.menuAddress,
      icon: "ant-design:home-filled",
    },
    {
      id: 2,
      address: "/data/work",
      name: m.menuWork,
      icon: "arcticons:digital-work-wallet",
    },
    {
      id: 3,
      address: "/data/military",
      name: m.menuMilitary,
      icon: "fluent-emoji-high-contrast:military-helmet",
    },
    {
      id: 4,
      address: "/data/socials",
      name: m.menuSocials,
      icon: "fluent-mdl2:web-environment",
    },
    {
      id: 5,
      address: "/data/driver",
      name: m.menuDriver,
      icon: "fa:drivers-license",
    },
    {
      id: 6,
      address: "/data/passport",
      name: m.menuPassport,
      icon: "fa-solid:passport",
    },
    {
      id: 7,
      address: "/data/health",
      name: m.menuHealth,
      icon: "game-icons:health-normal",
    },
    {
      id: 8,
      address: "/data/academics",
      name: m.menuAcademics,
      icon: "fa-solid:graduation-cap",
    },
    {
      id: 9,
      address: "/data/emails",
      name: m.menuEmails,
      icon: "bitcoin-icons:email-filled",
    },
    {
      id: 10,
      address: "/data/bank",
      name: m.menuBank,
      icon: "bitcoin-icons:bank-filled",
    },
    {
      id: 11,
      address: "/data/phones",
      name: m.menuPhones,
      icon: "boxicons:phone-filled",
    },
  ];
</script>

<div class="relative flex items-center justify-center min-h-screen p-4">
  <div class="absolute right-4 top-4">
    <LanguageToggle />
  </div>
  <div class="grid grid-cols-3 gap-3 w-full max-w-md">
    {#each menuBtns as btn}
      <Button
        size="icon"
        class="aspect-square w-full h-auto flex-col gap-1 cursor-pointer border-2 border-white"
        onclick={() => goto(btn.address)}
      >
        <Icon icon={btn.icon} class="size-1/3" />
        <span class="text-sm sm:text-base md:text-2xl">{btn.name()}</span>
      </Button>
    {/each}
  </div>
</div>
