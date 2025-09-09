const capitalize = require("./capitalize");

it("works", () => {
    expect(capitalize("a")).toBe("A");
});

it("works", () => {
    expect(capitalize("b")).toBe("B");
});

it("works", () => {
    expect(capitalize("c")).toBe("C");
});

it("works", () => {
    expect(capitalize("abc")).toBe("Abc");
});

it("works", () => {
    expect(capitalize(" abc")).toBe(" Abc");
});

it("works", () => {
    expect(capitalize("AVC")).toBe("AVC");
});

it("works", () => {
    expect(capitalize("    A  vdce    ")).toBe("    A  vdce    ");
});
