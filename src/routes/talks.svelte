<script context="module">
  // eslint-disable-next-line no-unused-vars
  export function preload({ params, query }) {
    return this.fetch(`talks.json`)
      .then((response) => response.json())
      .then((talks) => {
        return { talks };
      });
  }
</script>

<script>
  import Talk from "Components/Talk.svelte";
  export let talks;
</script>

<style>

</style>

<svelte:head>
  <title>Talks</title>
</svelte:head>

<div class="flex flex-wrap -mx-2">
  {#each talks as talk}
    <Talk {talk} />
  {/each}
</div>
