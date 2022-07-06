function func(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(`${key}: ${object[key]}`);
        }
    }
}

const user = {
    Age: 18,
    Name: "John",
    Job: "Programmer"
}

func(user);