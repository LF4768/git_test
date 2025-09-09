const calculator = require("./calculator");

it("works", () => {
    expect(calculator.add(2.3, 4.9)).toBe(7.2);
});

it("works", () => {
    expect(calculator.substract(7.6, 4.2)).toBe(3.4);
});

it("works", () => {
    expect(calculator.substract(7, 11)).toBe(-4);
});

it("works", () => {
    expect(calculator.substract(7.79, 11.27)).toBe(-3.48);
});

it("works", () => {
    expect(calculator.substract(7.7, 11.2)).toBe(-3.5);
});

it("works", () => {
    expect(calculator.multiply(2, 5)).toBe(10);
});

it("works", () => {
    expect(calculator.multiply(4, 5.3)).toBe(21.2);
});

it("works", () => {
    expect(calculator.divide(10, 5)).toBe(2);
});

it("works", () => {
    expect(calculator.divide(10, 3)).toBe(3.33);
});

it("works", () => {
    expect(calculator.divide(17, 7)).toBe(2.43);
});
