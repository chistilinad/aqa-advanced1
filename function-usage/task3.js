function divide(numerator, denominator) {

    if (denominator === 0) {
        throw new Error('Cannot divide by 0');
    }
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error('Both elements should be numbers');

    }

    return numerator / denominator;
}

try {
    const result = divide(10, 2);
    console.log(result);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    const result = divide("abc", 5);
    console.log(result);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}
