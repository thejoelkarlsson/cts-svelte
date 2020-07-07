import { talks } from "../../../src/routes/talk/[talk].json.js";

describe("Talk - Unit tests", () => {
  const compareJsonWithEndpoint = (id) => {
    const talk = JSON.parse(talks[id]);
    const title = talk.title;
    cy.request(`/talk/${id}.json`).then((response) => expect(response.body).to.have.property("title", title));
  };

  it("has the correct content", () => {
    compareJsonWithEndpoint("1");
    compareJsonWithEndpoint("2");
  });

  it("returns 404 message if not found", () => {
    const id = "wrong";
    cy.request({ url: `/talk/${id}.json`, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.message).to.eq("Not found");
    });
  });
});
