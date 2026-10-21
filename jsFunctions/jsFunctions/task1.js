function calculateDeclaration(width, height) {
    return width * height;
}
const result = calculateDeclaration(5, 10);
console.log("Function Declaration:", result);


const calculateExpression = function (width, height) {
    return width * height;
};

const result2 = calculateExpression(5, 5);
console.log("Function Expression:", result2);


const calculateArrow = (width, height) => width * height;

const result3 = calculateArrow(25, 25);
console.log("Arrow Function:", result3);