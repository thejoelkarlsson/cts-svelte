<script>
  import SpeakerImage from "Components/SpeakerImage.svelte";
  import Track from "Components/Track.svelte";
  import SlotItem from "Components/SlotItem.svelte";
  export let type;
  export let title;
  export let talks;
  export let startTime;
  export let endTime;
  export let light;
  let visible = true;

  function toggleVisibility() {
    visible = !visible;
  }
</script>

<style>

</style>

<div class={`flex flex-wrap p-2 -mx-2 mb-4 ${light ? 'bg-orange-200' : 'bg-orange-300'}`}>
  <div class="w-full flex justify-between">
    <p class="font-bold text-xl mb-2">{startTime}-{endTime}</p>
    <svg
      class={`${visible ? '' : 'rotate-180'} transform transition-transform duration-300 ease-in-out`}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      on:click={toggleVisibility}>
      <g>
        <rect width="24" height="24" opacity="0" />
        <path
          d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14
          1.46l-6 4.83A1 1 0 0 1 12 16z" />
      </g>
    </svg>
  </div>

  {#if type === 'keynote' || type === 'fika'}
    <div class={`w-full mb-4 px-2 ${visible ? '' : 'hidden'}`}>
      <div class="bg-white px-2 py-4 rounded shadow-lg">
        <p class="font-bold text-xl">{title}</p>
        <p class="text-sm">{startTime}-{endTime}</p>
      </div>
    </div>
  {:else if type === 'talks'}
    {#each talks as talk}
      <div class={`w-full sm:w-1/2 md:w-1/3 mb-4 px-2 ${visible ? '' : 'hidden'}`}>
        <div class="bg-white px-2 py-4 rounded shadow-lg">
          <p class="font-bold text-xl mb-2">{talk.title}</p>
          <p class="block text-gray-600 text-sm">
            {talk.speakers.map((speaker) => speaker.name.toUpperCase()).join(' & ')}
          </p>
          <p class="block text-sm mb-2">{`${talk.room}. ${startTime}-${endTime}`}</p>
          <a class="text-blue-500 hover:text-blue-700" href={`/talk/${talk.id}`}>Read more</a>
          <div class="bg-gray-100 -mx-2 -mb-4 mt-4 p-2 rounded-b">
            {#each talk.tracks as track}
              <Track {track} />
            {/each}
          </div>
        </div>
      </div>
    {/each}
  {:else}
    <div>other</div>
  {/if}
</div>
