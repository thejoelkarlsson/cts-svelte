<script context="module">
  // eslint-disable-next-line no-unused-vars
  export function preload({ params, query }) {
    return this.fetch(`speakers.json`)
      .then((response) => response.json())
      .then((speakers) => {
        return { speakers };
      });
  }
</script>

<script>
  import Speaker from "Components/Speaker.svelte";
  export let speakers;
</script>

<style>

</style>

<svelte:head>
  <title>Speakers</title>
</svelte:head>

<h1>All speakers</h1>

<div class="flex flex-wrap -mx-2">
  {#each speakers as speaker}
    <Speaker {speaker} />
  {/each}
</div>
