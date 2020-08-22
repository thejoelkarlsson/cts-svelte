<script>
  export let tracks;
</script>

<style>

</style>

<div class="bg-gray-100 -mx-4 -mb-4 mt-4 py-2 px-4 rounded-b">
  {#each tracks as track}
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-gray-700 mr-2">
      {track}
    </span>
  {/each}
</div>
