import json from "Data/talks.json";

const talkObject = (talk) => ({ id: talk.id, title: talk.title });

const speakerObject = (speaker, talk) => ({
  id: speaker.image.slice(0, -4),
  name: speaker.name,
  image: speaker.image,
  talks: [talkObject(talk)]
});

export const speakers = JSON.stringify(
  json
    .reduce((speakers, talk) => {
      talk.speakers.forEach((speaker) => {
        const index = speakers.findIndex((s) => s.image === speaker.image);
        index >= 0 ? speakers[index].talks.push(talkObject(talk)) : speakers.push(speakerObject(speaker, talk));
      });

      return speakers;
    }, [])
    .sort((a, b) => a.name.localeCompare(b.name))
);

export function get(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(speakers);
}
