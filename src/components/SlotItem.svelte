<script>
  import SpeakerImage from "Components/SpeakerImage.svelte";
  import Track from "Components/Track.svelte";
  export let small = false;
</script>

<style>

</style>

<div class={`w-full ${small && 'sm:w-1/2 md:w-1/3'} mb-4 px-2`}>
  <div class="bg-white px-2 py-4 rounded shadow-lg">
    <slot />
  </div>
</div>
