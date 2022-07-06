function func(letter, object) {
    if (letter in object) {
        return true;
    } else {
        return false;
    }
}

const user = {
    Age: 18,
    Name: "John",
    Job: "Programmer"
}

console.log(func("Surname", user));
console.log(func("Age", user));