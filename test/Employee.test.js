const { it, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee", () => {
  const employeeTest = new Employee(`John`, 27, `john@mail.com`);
  it("returns the correct name of the employee", () => {
    expect(employeeTest.getName()).toBe("John");
  });

  it("returns the correct id of the employee", () => {
    //    const employeeTest = new Employee(`John`, 27, `john@mail.com`);
    expect(employeeTest.getId()).toBe(27);
  });

  it("returns the correct email address of employee", () => {
    //  const employeeTest = new Employee(`John`, 27, `john@mail.com`);
    expect(employeeTest.getEmail()).toBe("john@mail.com");
  });

  it("returns the correct role of employee", () => {
    //const employeeTest = new Employee(`John`, 27, `john@mail.com`);
    expect(employeeTest.getRole()).toBe("Employee");
  });
});
