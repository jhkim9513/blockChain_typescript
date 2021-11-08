const name = "kim", gender = "male", age = 29;

const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
}

sayHi(name, age, gender);

export {}