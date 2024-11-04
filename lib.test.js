const { test, expect } = require("@jest/globals");
const lib=require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3 ,5 ,7])).toBe(5);
});

test("avg[-5, 5] should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

test("prime(3) should be true", () => {
    expect(lib.prime(3)).toBe(true);
});

test("prime(-1) should be false", () => {
    expect(lib.prime(-1)).toBe(false);
});

test("prime(15) should be false", () => {
    expect(lib.prime(15)).toBe(false);
});

test("factorial(16) should be false", () => {
    expect(lib.factorial(16)).toBe("Please enter a number less than or equal to 15.");
});

test("factorial(6) should be false", () => {
    expect(lib.factorial(6)).toBe(720);
});

test("factorial(0) should be false", () => {
    expect(lib.factorial(0)).toBe(1);
});

test("factorial(-1) should be false", () => {
    expect(lib.factorial(-1)).toBe("The input you entered is not acceptable.");
});