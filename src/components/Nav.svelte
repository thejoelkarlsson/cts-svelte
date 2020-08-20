<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <div class="container mx-auto">
    <ul>
      <li>
        <a aria-current={segment === undefined ? 'page' : undefined} href=".">home</a>
      </li>
      <li>
        <a aria-current={segment === 'about' ? 'page' : undefined} href="about">about</a>
      </li>
      <li>
        <a rel="prefetch" aria-current={segment === 'talks' || segment === 'talk' ? 'page' : undefined} href="talks">
          talks
        </a>
      </li>
      <li>
        <a
          rel="prefetch"
          aria-current={segment === 'speakers' || segment === 'speaker' ? 'page' : undefined}
          href="speakers">
          speakers
        </a>
      </li>
      <li>
        <a aria-current={segment === 'schedule' ? 'page' : undefined} href="schedule">schedule</a>
      </li>
    </ul>
  </div>
</nav>
