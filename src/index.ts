class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age:number, gender:string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human('lynn', 20, 'female');

// interface Human {
//     name: string;
//     age:number;
//     gender: string;
// }

const sayHi = (person: Human) => {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`);
}

sayHi(lynn);

export {}