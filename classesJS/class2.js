const c1 = require("./../classesJS/class1.js");
class class2 {
    constructor(name,place,sal) {
        this.name = name;
        this.place = place;
        this.sal = sal;
    }
}
let res = c1.abcd(20, 30);
console.log(`res : ${res}`)