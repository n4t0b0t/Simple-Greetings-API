const request = require("supertest");
const app = require("./app");

describe("my awesome service", () => {
  it("should GET a greeting", () => {
    return request(app)
      .get("/")
      .expect("Hello Errybody!");
  });
});
