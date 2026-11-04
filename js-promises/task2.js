function getTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json());
}

getTodo()
    .then((todo) => console.log(todo))
    .catch((error) => console.log(error.message));


function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json());
}

getUser()
    .then((user) => console.log(user))
    .catch((error) => console.log(error.message));


const all = Promise.all([getTodo(), getUser()]);
const race = Promise.race([getTodo(), getUser()]);

all
    .then((results) => console.log("all:", results))
    .catch((error) => console.log(error.message));

race
    .then((winner) => console.log("race:", winner))
    .catch((error) => console.log(error.message));