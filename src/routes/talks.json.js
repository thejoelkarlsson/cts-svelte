const json = require("../../data/talks.json");

export const talks = JSON.stringify(json);

export function get(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(talks);
}
