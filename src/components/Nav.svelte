<script>
  export let segment;
  $: talksActive = segment === "talk" || segment === "talks" ? "active" : "";
  $: speakersActive = segment === "speaker" || segment === "speakers" ? "active" : "";
  $: aboutActive = segment === "about" ? "active" : "";
  $: scheduleActive = segment === "schedule" ? "active" : "";
</script>

<style>

</style>

<nav style="background-color: #323232">
  <div class="container mx-auto">
    <div class="flex items-center justify-between flex-wrap">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src="/cts-logo.png" alt="cts" class="h-24" />
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white
          hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto">
        <a href="/" class={`nav-link ${segment === undefined ? 'active' : ''}`}>Home</a>
        <a class={`nav-link ${scheduleActive}`} href="/schedule">Schedule</a>
        <a rel="prefetch" href="/talks" class={`nav-link ${talksActive}`}>Talks</a>
        <a rel="prefetch" class={`nav-link ${speakersActive}`} href="/speakers">Speakers</a>
        <a href="/about" class={`nav-link mr-0 ${aboutActive}`}>About</a>
      </div>
    </div>
  </div>
</nav>
