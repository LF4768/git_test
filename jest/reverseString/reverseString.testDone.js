const reverse = require("./reverseString");

it("works", () => {
    expect(reverse("abc")).toBe("cba");
});

it("works", () => {
    expect(reverse("xyz")).toBe("zyx");
});

it("works", () => {
    expect(reverse(" a a b c c ")).toBe(" c c b a a ");
});

it("works", () => {
    expect(reverse(";;--")).toBe("--;;");
});
