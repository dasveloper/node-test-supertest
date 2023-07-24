const request = require("supertest");
const app = require("../api/endpoint");

describe("POST: /endpoint", () => {
  it("Should post name and 1kb avatar", async () => {
    await request(app)
      .post("/endpoint")
      .field("name", "John Doe")
      .attach("avater", Buffer.from("a".repeat(1000)), "filename")
      .expect({ success: true })
      .expect(200);
  });
  it("Should post name and 10mb avatar", async () => {
    await request(app)
      .post("/endpoint")
      .field("name", "John Doe")
      .attach("avater", Buffer.from("a".repeat(10000000)), "filename")
      .expect({ success: true })
      .expect(200);
  });
});
