<script>
  import SpeakerImage from "Components/SpeakerImage.svelte";
  import Tracks from "Components/Tracks.svelte";
  export let talk;
</script>

<style>

</style>

<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 px-2">
  <div class="max-w-sm rounded overflow-hidden mb-4 shadow-lg px-2 py-4">
    <SpeakerImage speakers={talk.speakers} />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        <a rel="prefetch" href="talk/{talk.id}">{talk.title}</a>
      </div>
      <p class="text-gray-700 text-base">{talk.description}</p>
    </div>
    <Tracks tracks={talk.tracks} />
  </div>
</div>
