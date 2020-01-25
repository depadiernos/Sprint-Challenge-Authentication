const request = require("supertest")
const db = require("../database/dbConfig")
const server = require("../api/server")

beforeEach(async () => {
  await db.seed.run()
})

describe("auth router", () => {
  test("register a new user", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "Keyboard", password: "password3" })
    expect(res.status).toBe(201)
  })
  test("register a new user", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "Keyboard", password: "password3" })
    expect(res.body.username).toBe("Keyboard")
  })
  test("login user with correct password", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "Paper", password: "password2" })
    expect(res.status).toBe(200)
  })
  test("login user with incorrect password", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "Paper", password: "password" })
    expect(res.status).toBe(401)
  })
})
