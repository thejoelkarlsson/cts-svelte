<script>
  import Nav from "Components/Nav.svelte";
  import Footer from "Components/Footer.svelte";

  export let segment;
</script>

<style>

</style>

<Nav {segment} />

<main class="flex-1">
  <div class="container mx-auto my-4">
    <slot />
  </div>
</main>

<Footer />
