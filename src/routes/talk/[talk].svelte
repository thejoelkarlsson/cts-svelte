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

<h1>{talk.title}</h1>
<h3>{talk.speakers.map((speaker) => speaker.name).join(', ')}</h3>

<div class="content">
  <p>{talk.description}</p>
  <ul>
    {#each talk.tracks as track}
      <li>{track}</li>
    {/each}
  </ul>
</div>
