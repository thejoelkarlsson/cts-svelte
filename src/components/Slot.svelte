<script>
  import SpeakerImage from "Components/SpeakerImage.svelte";
  import Track from "Components/Track.svelte";
  export let type;
  export let title;
  export let talks;
  export let startTime;
  export let endTime;
  export let room;
</script>

<style>

</style>

{#if type === 'keynote'}
  <div class="flex flex-wrap -mx-2">
    <div class="w-full mb-4 px-2">
      <div>{title}</div>
      <div>{startTime}</div>
      <div>{endTime}</div>
    </div>
  </div>
{:else if type === 'fika'}
  <div class="flex flex-wrap -mx-2">
    <div class="w-full mb-4 px-2">
      <div>{title}</div>
      <div>{startTime}</div>
      <div>{endTime}</div>
    </div>
  </div>
{:else if type === 'talks'}
  <div class="flex flex-wrap -mx-2">
    {#each talks as talk}
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 px-2">
        <div>{talk.title}</div>
        <div class="block text-gray-700 text-sm font-bold mb-2">
          {talk.speakers.map((speaker) => speaker.name).join(' & ')}
        </div>
        <div>{talk.room}</div>
        <div>{startTime}</div>
        <div>{endTime}</div>
        <a href={`/talk/${talk.id}`}>Read more</a>
        <div>
          {#each talk.tracks as track}
            <Track {track} />
          {/each}
        </div>
      </div>
    {/each}

  </div>
{:else}
  <div>other</div>
{/if}
