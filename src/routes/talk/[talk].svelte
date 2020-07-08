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
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{talk.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
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
