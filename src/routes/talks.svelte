<script context="module">
  // eslint-disable-next-line no-unused-vars
  export function preload({ params, query }) {
    return this.fetch(`talks.json`)
      .then((response) => response.json())
      .then((talks) => {
        return { talks };
      });
  }
</script>

<script>
  import Talk from "Components/Talk.svelte";
  export let talks;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Talks</title>
</svelte:head>

<h1>All talks</h1>

<ul>
  {#each talks as talk}
    <!-- we're using the non-standard `rel=prefetch` attribute to
                  tell Sapper to load the data for the page as soon as
                  the user hovers over the link or taps it, instead of
                  waiting for the 'click' event -->
    <li>
      <Talk {talk} />
      <a rel="prefetch" href="talk/{talk.id}">{talk.title}</a>
    </li>
  {/each}
</ul>
