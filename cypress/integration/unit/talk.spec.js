import { talks } from "../../../src/routes/talk/[talk].json.js";

describe("Talk - Unit tests", () => {
  it("has the correct content", () => {
    Object.keys(talks).forEach((id) => {
      const talk = JSON.parse(talks[id]);
      cy.request(`/talk/${id}.json`).then((response) => expect(response.body).eql(talk));
    });
  });

  it("returns 404 message if not found", () => {
    const id = "wrong";
    cy.request({ url: `/talk/${id}.json`, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.message).to.eq("Not found");
    });
  });
});
