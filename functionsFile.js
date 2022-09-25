
// function f() {
//     if (true) {
//         x = 30;
//         console.log(x)
//         var x;
//     }
// }
// f();
// var x = 40
// console.log(typeof x)
// x = 'new data type'
// console.log(`after changing ${ typeof x }`)

// console.log(x);

let arr = new Array();
arr = arr.concat([10, 2], 3, 4, 5);
arr = arr.concat(19,6,18);
console.log(`type of array is ${typeof arr}`);
console.log(arr);
console.log(arr.length);
arr[50] = 78;
console.log(arr.length);
console.log(arr[48]);
delete arr[50];
arr[2];
for (let i = 0; i <= arr.length;i++){
    console.log(`array item index ${i} and item value ${arr[i]}`);
}




