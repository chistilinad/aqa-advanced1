const numbers = [1, 2, 3, 4, 5];

const multipliedByIndex = numbers.map((number, index) => {
    return number * index;
});

console.log(numbers);
console.log(multipliedByIndex);
