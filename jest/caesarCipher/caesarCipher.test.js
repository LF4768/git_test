const caesarCipher = require("./caesarCipher");

it("Works!", () => {
    expect(caesarCipher("a", 1)).toBe("b");
});

it("Works!", () => {
    expect(caesarCipher("a", 2)).toBe("c");
});

it("Works!", () => {
    expect(caesarCipher("r", 4)).toBe("v");
});

it("Works!", () => {
    expect(caesarCipher("A", 3)).toBe("D");
});

it("Works!", () => {
    expect(caesarCipher("", 3)).toBe("");
});

it("Works!", () => {
    expect(caesarCipher("     &&&&     ", 3)).toBe("     &&&&     ");
});

it("Works!", () => {
    expect(caesarCipher("X & Y * Z # #", 10)).toBe("H & I * J # #");
});

it("Works!", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

it("Works!", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

it("Works!", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

it("Works!", () => {
    expect(caesarCipher("x", 6)).toBe("d");
});

it("Works!", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
});

it("Works!", () => {
    expect(caesarCipher("xyz", 4)).toBe("bcd");
});
