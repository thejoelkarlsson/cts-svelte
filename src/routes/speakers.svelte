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
  import { stores } from "@sapper/app";
  const { page } = stores();
  import Speaker from "Components/Speaker.svelte";
  export let speakers;
  let query = $page.query.speaker || "";
  let filteredSpeakers = speakers.filter((speaker) => speaker.name.toLowerCase().includes(query.toLowerCase()));
  function updateFilter() {
    filteredSpeakers = speakers.filter((speaker) => speaker.name.toLowerCase().includes(query.toLowerCase()));
  }
</script>

<style>

</style>

<svelte:head>
  <title>Speakers</title>
</svelte:head>

<h1>All speakers {query}</h1>
<input class="border border-gray-500" bind:value={query} />
<button on:click={updateFilter}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-search"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="3"
    stroke="#00BCD4"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" />
    <circle cx="10" cy="10" r="7" />
    <line x1="21" y1="21" x2="15" y2="15" />
  </svg>
</button>

<div class="flex flex-wrap -mx-2">
  {#each filteredSpeakers as speaker}
    <Speaker {speaker} />
  {/each}
</div>
