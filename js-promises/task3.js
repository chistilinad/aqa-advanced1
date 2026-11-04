async function getTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todo = await response.json();
    return todo;
}
async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    return user;
}


async function main() {
    try {
        const all = await Promise.all([getTodo(), getUser()]);
        const race = await Promise.race([getTodo(), getUser()]);

        console.log("all:", all);
        console.log("race:", race);
    } catch (error) {
        console.log(error.message);
    }
}

main();