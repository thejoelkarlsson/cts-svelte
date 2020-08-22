import json from "Data/talks.json";

export const talks = JSON.stringify(json.sort((a, b) => a.title.localeCompare(b.title)));

export function get(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(talks);
}
