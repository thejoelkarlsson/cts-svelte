import { talks } from "../../../src/routes/talks.json.js";

describe("Talks - Unit tests", () => {
  it("has the correct content", () => {
    cy.request(`/talks.json`).then((response) => expect(response.body).eql(JSON.parse(talks)));
  });
});
