<script>
  export let speakers;
</script>

<style>

</style>

<div class="flex flex-wrap justify-center">
  {#each speakers as speaker}
    <img
      class={'rounded-full shadow-lg border-4 border-solid border-white w-1/3 -mx-2'}
      alt={speaker.name}
      src={`/images/speaker/${speaker.image}`} />
  {/each}
</div>
