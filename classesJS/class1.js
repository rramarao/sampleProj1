
class class1{ 
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    get Name() {
        return this.name;
    }

    get Age() {
        return this.age;
    }
    abcd(a, b) {
        return a + b;
    }
}

const p = new class1("Ram", 34);
const p1 = new class1("RamRao",38);

// console.log(p.Name)
// console.log(p1.Age);

// console.log(p1.abcd(5, 10));

module.exports = new class1();


