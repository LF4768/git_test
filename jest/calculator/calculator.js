const calculator = {
    add(a, b) {
        return a + b;
    },
    substract(a, b) {
        return Number((a - b).toFixed(2));
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return Number((a / b).toFixed(2));
    },
};

module.exports = calculator;
