import scheduleJson from "Data/schedule.json";
import talksJson from "Data/talks.json";

const talks = talksJson.reduce((map, obj) => {
  map[obj.id] = obj;
  return map;
}, {});

export const schedule = JSON.stringify({
  startTime: scheduleJson.startTime,
  slots: scheduleJson.slots.map((slot) => (slot.talks ? { ...slot, talks: slot.talks.map((id) => talks[id]) } : slot))
});

export function get(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(schedule);
}
