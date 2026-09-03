<script lang="ts">
  import { getLocale, setLocale } from "$lib/paraglide/runtime.js";

  const currentFlag = $derived(getLocale() === "pt-br" ? "🇧🇷" : "🇺🇸");

  function toggleLocale() {
    setLocale(getLocale() === "pt-br" ? "en" : "pt-br");
  }
</script>

<button
  title="language"
  aria-label="language"
  class="flag-btn"
  onclick={toggleLocale}
>
  <span aria-hidden="true" class="flag-img">{currentFlag}</span>
</button>

<style>
  .flag-btn {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    width: 45px;
    height: 45px;
  }

  .flag-img {
    display: block;
    font-size: 2rem;
    line-height: 45px;
  }
</style>
