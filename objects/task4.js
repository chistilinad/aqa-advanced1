const person = {
    firstName: "Олена",
    lastName: "Шевченко",
    age: 28
};
person.email = "olena.shevchenko@example.com";
delete person.age;
console.log(person);