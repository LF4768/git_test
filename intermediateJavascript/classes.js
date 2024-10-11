let obj = {
    name: "John",
    surname: "Smith",
    year: 2024,
    dateOfBirth: 1994,


    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    get age() {
        return this.year - this.dateOfBirth;
    }, 

};

console.log(obj.fullName)
console.log(obj.age)

// obj.fullName = "jacob dunkins";   this gives an error because it does not have a setter

let obj2 = {
    name: "John",
    surname: "Smith",
    year: 2024,
    dateOfBirth: 1994,


    get fullName() {
        return `${this.name} ${this.surname}`;
    },


    set fullName(value) {
        [this.name,this.surname] = value.split(" ");
    }
}


obj2.fullName = "David Goggins"; // "virtual" property full name

console.log(obj2.name)
console.log(obj2.surname)



// defineProperty method


let objWritable = {};

Object.defineProperty(objWritable, "id", {
    value: 10,
    writable: true
})
Object.defineProperty(objWritable, "name", {
    value: "Josh",
    writable: false
})

console.log(objWritable);

objWritable.id = 20;
objWritable.name = "Allan";

console.log(objWritable);



let objEnumerable = {};

Object.defineProperty(objEnumerable, "id", {
    value: 10,
    enumerable: true
})
Object.defineProperty(objEnumerable, "age", {
    value: 25,
    enumerable: false
})

console.log(objEnumerable)

for(let key in objEnumerable) {
    console.log(key); // Does not show age
}


let objConfigurable = {};

Object.defineProperty(objConfigurable, "id", {
    value: 10,
    configurable: true
})
Object.defineProperty(objConfigurable, "hobbie", {
    value: "games",
    configurable: false
})

console.log(objConfigurable)

delete objConfigurable.id;
delete objConfigurable.hobbie;

console.log(objConfigurable)   // games does not get deleted


let obj3 = {
    name: "Nikolas",
    surname: "Jackson"
}

Object.defineProperty(obj3, "fullName", {
    get() {
        return `${this.name} ${this.surname}`
    },
    set(value) {
        [this.name, this.surname] = value.split(" ")
    }
})

// NOTE: defineProperty CAN HAVE EITHER GET/SET OR VALUE/WRITABLE  NOT BOTH

console.log(obj3.fullName)
obj3.fullName = "Bruno Fernandes"
console.log(obj3.fullName)
for(let key in obj3) {
    console.log(key);
}

let user = {
    get name() {
        return this._name;   // properties with underscrore(_) are considered internal by the coding world and are not called directly from outside
    },

    set name(value) {
        if(value.length < 4) {
            console.log("length of name is too short, need at least 4 characters")
            return;
        }
        this._name = value;
    }
};

user.name = "Jay";
console.log(user.name);



function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    })
}

let jason = new User("jason", new Date(1995,7,23));

console.log(jason.birthday)
console.log(jason.age);