let arr = new Array();
let arr1 = [];
let arr2 = [1, 2, 4];
let sum = 0;
for (let i = 0; i < arr2.length; i++){
    sum = sum + arr2[i];
}
console.log(sum);
// var j = arr2.forEach(function cb(value, index, array) {
//     console.log(`value of j is ${value}`);
//     if (value == 2) {
//         console.log(`array[index] is : ${array[index]}`);
//         return array[index];
//     }
// });
let temp = 0;

function reverseArr(sortedArr) {
        for (var g = 0; g < sortedArr.length; g++) {
            if (sortedArr[g] < sortedArr[g + 1]) {
                temp = sortedArr[g + 1];
                sortedArr[g + 1] = sortedArr[g];
                sortedArr[g] = temp;
            }
        }
    return sortedArr;
}
let NewArr = function (arr7) {
    var arr4 = new Array();
    for (var g = 0; g < arr7.length; g++) {
        arr4 = reverseArr(arr7);
    }
    return arr4;
}
console.log(`NewArr ${NewArr(arr2)}`);


// duplicates in Array
let Arr9 = [3, 5, 9, 12, 13, 3,12,9,52,52];

function findDuplicateArr(givenArr) {
let DuplicateArr = [];
 let aArrIndex = 0;
    for (var i = 0; i < givenArr.length; i++) {
        for (let j = 0; j < givenArr.length; j++) {
            if ((givenArr[i] == givenArr[j]) && (i != j)) {
                // console.log(`inside if with givenArr[${i}] and its value is ${givenArr[i]}`);
                // console.log(`inside if with givenArr[${j}] and its value is ${givenArr[j]}`);
                if (!DuplicateArr.includes(givenArr[i], 0)) {
                    DuplicateArr[aArrIndex] = givenArr[i];
                    aArrIndex = aArrIndex + 1;
                }
            }
        }
    }
    return DuplicateArr;
}
let DuplicateArray = findDuplicateArr(Arr9);
console.log("Duplicate Array : "+DuplicateArray)