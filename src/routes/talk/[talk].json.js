const json = require("../../../static/data/talks.json");

const getTalks = (json) =>
  json.reduce((map, talk) => {
    map[talk.id] = JSON.stringify(talk);
    return map;
  });

export const talks = getTalks(json);

export function get(req, res) {
  const { talk } = req.params;

  if (talks[talk]) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(talks[talk]);
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        message: `Not found`
      })
    );
  }
}
