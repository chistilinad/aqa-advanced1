const users = [
    { name: "Anna", email: "anna@example.com", age: 25 },
    { name: "Max", email: "maksym@example.com", age: 30 },
    { name: "Sofia", email: "sofia@example.com", age: 22 }
];
for (const { name, email, age } of users) {
    console.log(`user: ${name}, Email: ${email}, Вік: ${age}`);
}