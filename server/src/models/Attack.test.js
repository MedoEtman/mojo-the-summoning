const { db } = require("../db/config");
const { Attack } = require("./index");

describe("Attack model", () => {
  beforeAll(async () => {
    await db.sync({ force: true });
  });

  afterAll(async () => {
    await db.close();
  });

  it("should create an Attack with valid attributes", async () => {
    const attack = await Attack.create({
      title: "Fireball",
      mojoCost: 10,
      staminaCost: 5,
    });
    expect(attack.id).toBeTruthy();
    expect(attack.title).toBe("Fireball");
    expect(attack.mojoCost).toBe(10);
    expect(attack.staminaCost).toBe(5);
  });

  it("should not create an Attack without required attributes", async () => {
    expect.assertions(1); // making sure the expect inside catch block is called
    try {
      await Attack.create({
        mojoCost: 10,
        staminaCost: 5,
      });
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
