<script>
  export let speakers;
</script>

<style>

</style>

{#each speakers as speaker}
  <img class="w-full" alt={speaker.name} src={`/images/speaker/${speaker.image}`} />
{/each}
