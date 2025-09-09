const analyzeArray = require("./analyzeArray");

it("Works!", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

it("Works!", () => {
    expect(analyzeArray([])).toEqual({
        average: NaN,
        min: undefined,
        max: undefined,
        length: 0,
    });
});
