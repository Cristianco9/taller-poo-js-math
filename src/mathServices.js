class MathServices {

    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    calculateSine(angle) {
        const result = Math.sin(this.toRadians(angle));
        return {
            status: "correct",
            message: `The sine of ${angle}° is ${result}`,
            result: result
        };
    }

    calculateCosine(angle) {
        const result = Math.cos(this.toRadians(angle));
        return {
            status: "correct",
            message: `The cosine of ${angle}° is ${result}`,
            result: result
        };
    }

    calculateTangent(angle) {
        const result = Math.tan(this.toRadians(angle));
        return {
            status: "correct",
            message: `The tangent of ${angle}° is ${result}`,
            result: result
        };
    }

    calculatePower(base, exponent) {
        const result = Math.pow(base, exponent);
        return {
            status: "correct",
            message: `${base} raised to the power of ${exponent} is ${result}`,
            result: result
        };
    }

    calculateSquareRoot(number) {
        if (number < 0) {
            return {
                status: "wrong",
                message: "Cannot calculate the square root of a negative number.",
                result: null
            };
        }
        const result = Math.sqrt(number);
        return {
            status: "correct",
            message: `The square root of ${number} is ${result}`,
            result: result
        };
    }
}

const calculator = new MathServices();

console.log(calculator.calculateSine(30));
console.log(calculator.calculateCosine(60));
console.log(calculator.calculateTangent(45));
console.log(calculator.calculatePower(2, 5));
console.log(calculator.calculateSquareRoot(16));