<script context="module">
  // eslint-disable-next-line no-unused-vars
  export function preload({ params, query }) {
    return this.fetch(`schedule.json`)
      .then((response) => response.json())
      .then((schedule) => {
        return { schedule };
      });
  }
</script>

<script>
  import Slot from "Components/Slot.svelte";
  export let schedule;
</script>

<style>

</style>

<svelte:head>
  <title>Schedule</title>
</svelte:head>

<h1>Schedule</h1>

{#each schedule.slots as slot}
  <Slot {...slot} />
{/each}
