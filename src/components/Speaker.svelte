<script>
  export let speaker;
</script>

<style>

</style>

<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 px-2">
  <div class="max-w-sm rounded overflow-hidden mb-4 shadow-lg">
    <div>
      <img class="w-full" src={`/images/speaker/${speaker.image}`} alt={speaker.name} />
    </div>
    <div class="px-4 py-4">
      <div class="font-bold text-xl px-4 mb-2">{speaker.name}</div>
      <div class="w-full -my-2">
        {#each speaker.talks as talk}
          <a
            rel="prefetch"
            href="/talk/{talk.id}"
            class="flex cursor-pointer hover:text-blue-600 hover:bg-blue-100 py-2 my-2 px-4 rounded">
            {talk.title}
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>
