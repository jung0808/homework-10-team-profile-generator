const { it, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe("Engineer", () => {
  const internTest = new Intern(`John`, 27, `john@mail.com`, "UVA");
  it("returns the correct name of the employee", () => {
    expect(internTest.getName()).toBe("John");
  });

  it("returns the correct id of the employee", () => {
    expect(internTest.getId()).toBe(27);
  });

  it("returns the correct email address of employee", () => {
    expect(internTest.getEmail()).toBe("john@mail.com");
  });

  it("returns the correct user school", () => {
    expect(internTest.getSchool()).toBe("UVA");
  });
});
