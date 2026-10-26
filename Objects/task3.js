const car1 = {
    brand: "bmw",
    model: "x5",
    year: "2025"
}

const car2 = {
    brand: "mazda",
    model: "cr5",
    owner: "Vlad"
}

const car3 = {
    ...car1,
    ...car2
};

console.log(car3);