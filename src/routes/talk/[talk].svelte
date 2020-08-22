<script context="module">
  // eslint-disable-next-line no-unused-vars
  export async function preload({ params, query }) {
    // the `talk` parameter is available because
    // this file is called [talk].svelte
    const res = await this.fetch(`talk/${params.talk}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { talk: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let talk;
</script>

<style>

</style>

<svelte:head>
  <title>{talk.title}</title>
</svelte:head>

<div class="text-sm py-4">
  <a class="text-blue-500" href="/talks/" alt="Talks">Talks</a>
  <span class="px-2">/</span>
  {talk.title}
</div>

<div class="px-2">
  <div class="flex flex-wrap -mx-2">
    <div class="w-full sm:w-1/2 md:w-1/3 px-2">
      {#each talk.speakers as speaker}
        <img class="w-full" src={`/images/speaker/${speaker.image}`} alt={speaker.name} />
      {/each}
    </div>
    <div class="w-full sm:w-1/2 md:w-2/3 px-2">
      <h1 class="font-bold text-xl">{talk.title}</h1>
      <h3 class="block text-gray-600 text-sm uppercase">{talk.speakers.map((speaker) => speaker.name).join(', ')}</h3>

      {#each talk.description.split('\n') as description}
        {#if description && description.length > 1}
          <p class="block">{description}</p>
        {:else}
          <p class="block h-6" />
        {/if}
      {/each}

      <div class="w-full">
        {#each talk.tracks as track}
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-gray-700 mr-2">
            {track}
          </span>
        {/each}
      </div>
    </div>
  </div>
</div>
