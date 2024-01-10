// Create a square function:
function square(num: number) {
    return Math.pow(num, 2);
}

// Create a squareRoot function:
function squareRoot (num1: number, num2: number, num3: number, num4: number) {
    const result = square(num2 - num1) + square(num4 - num3);
    return Math.sqrt(result);
}

// Create a distance function:
function distance(num1: number, num2: number, num3: number, num4: number): number {
    return squareRoot(num1, num2, num3, num4);
}

const sum = distance(10, 20, 30, 40);
console.log (Math.floor(sum));
