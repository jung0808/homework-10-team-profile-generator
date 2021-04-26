const { it, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  const engineerTest = new Engineer(`John`, 27, `john@mail.com`, "john1234");
  it("returns the correct name of the employee", () => {
    expect(engineerTest.getName()).toBe("John");
  });

  it("returns the correct id of the employee", () => {
    expect(engineerTest.getId()).toBe(27);
  });

  it("returns the correct email address of employee", () => {
    expect(engineerTest.getEmail()).toBe("john@mail.com");
  });

  it("returns the correct user github", () => {
    expect(engineerTest.getGithub()).toBe("john1234");
  });
});
