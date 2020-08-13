<script>
  import Nav from "Components/Nav.svelte";
  import Footer from "Components/Footer.svelte";

  export let segment;
</script>

<style>

</style>

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />
