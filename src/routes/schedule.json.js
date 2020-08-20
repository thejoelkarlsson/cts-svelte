import scheduleJson from "Data/schedule.json";
import talksJson from "Data/talks.json";
import roomsJson from "Data/rooms.json";

const talks = talksJson.reduce((map, obj) => {
  map[obj.id] = obj;
  return map;
}, {});

let startTime = Date.parse(`${scheduleJson.startTime}+02:00`);

const duration = (duration, timeUnit = 60 * 1000) => ({
  startTime: new Date(startTime).toLocaleTimeString("sv-SE").substring(0, 5),
  endTime: new Date((startTime += duration * timeUnit)).toLocaleTimeString("sv-SE").substring(0, 5)
});

export const schedule = JSON.stringify({
  startTime: scheduleJson.startTime,
  slots: scheduleJson.slots.map((slot) =>
    slot.talks
      ? {
          ...slot,
          ...duration(slot.duration),
          talks: slot.talks.map((id, i) => ({ ...talks[id], room: roomsJson[i].name }))
        }
      : { ...slot, ...duration(slot.duration) }
  )
});

export function get(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(schedule);
}
