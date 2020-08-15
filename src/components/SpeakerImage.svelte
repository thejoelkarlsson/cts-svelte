<script>
  export let speakers;
</script>

<style>

</style>

<div class="flex flex-wrap">
  {#each speakers as speaker}
    <img
      class={`w-full ${speakers.length > 1 && `sm:w-1/${speakers.length}`}`}
      alt={speaker.name}
      src={`/images/speaker/${speaker.image}`} />
  {/each}
</div>
