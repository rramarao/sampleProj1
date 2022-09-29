// "use strict"
// function strReverse(a,b){
// return a+b;
// }
// let result = strReverse(50,40);
// console.log("result : " + result);

// let obj1 = new Object();
// obj1.name = "john";
// obj1.age = 50;
// obj1.x = "x value";
// console.log("obj1.name : " + obj1.name);
// for (let i in obj1) {
//     console.log(`obj property  ${i} is ${obj1[i]}`);
// }

var obj2 = {
    firstName:'Ravipati',
    lastname: "Raj",
    age: 53,
    state: 'Hyd',
    get fullname() {
        return this.firstName + " " + this.lastname;
            },
};

// for (let i in obj2) {
//     console.log(`obj property  ${i} is ${obj2[i]}`);
// }

let objEntries = Object.entries(obj2);
for (let entry of objEntries) {
    console.log(obj2[entry[0]]);
}

let arr = [1, 7, 4, 8, 2, 3];

let result = arr.map(function (value, index, numbers) {
    if ((value % 2) === 0) {
     return value * 5
    } else {
        return value 
    }
});
console.log(result);

let str = 'Ramarao'
let strArr = str.split("");
let strReverse = strArr.reverse().toString();
console.log(strReverse);
// console.log(strReverse.replace(/,/g, ""));
console.log(strReverse.replaceAll(',', ''));


const str1 = 'Aeiou';

const str1Arr = str1.toLowerCase().split('');
var vowelCount = 0;
for (let key in str1Arr) {
    if (str1Arr[key]==='a' || str1Arr[key]==='e'|| str1Arr[key]==='i'|| str1Arr[key]==='o'|| str1Arr[key]==='u') {
        vowelCount++
    }
}
console.log(vowelCount);



// 




// var person = {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.state = state;
//     //  fullname() {
//     //     return this.firstName + " " + this.lastname;
//     // };
    
// }

// let person1 = person("Ravipati", "Rama", 37, "Hyd");
// let person2 = person("Ravipati", "Rao", 38, "Bang");

// function facto(n,fact) {
//     if (n <= 0) {
//         return fact;
//     }
//     fact = fact * n;
//     n--;
//     console.log(fact);
//     var temp = fact;
//     facto(n, fact);
//     return temp;
// }

// console.log(facto(6, 1));

// var a = b = 7;
// console.log(a);
// console.log(b);


// console.log(0.1 + 0.2);
// console.log(Math.ceil(0.1 + 0.2) == 0.3);

// let str = 'RAM'
// let temp;
// for (let i = 0; i < str.split.length;i++){
//     str.split("")[i] = temp;
//     temp = 
// }
