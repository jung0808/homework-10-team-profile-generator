const { it, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

describe("Manager", () => {
  const managerTest = new Manager(`John`, 27, `john@mail.com`, 7777);
  it("returns the correct name of the employee", () => {
    expect(managerTest.getName()).toBe("John");
  });

  it("returns the correct id of the employee", () => {
    expect(managerTest.getId()).toBe(27);
  });

  it("returns the correct email address of employee", () => {
    expect(managerTest.getEmail()).toBe("john@mail.com");
  });

  it("returns the correct office Number", () => {
    expect(managerTest.getOfficeNumber()).toBe(7777);
  });
});
