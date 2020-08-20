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
    <!-- we're using the non-standard `rel=prefetch` attribute to
                  tell Sapper to load the data for the page as soon as
                  the user hovers over the link or taps it, instead of
                  waiting for the 'click' event -->
    <Speaker {speaker} />
  {/each}
</div>
