// import strReverse from './firstTest.js'
// import * as firstTest from './firstTest.js'
const parse = require('./firstTest.js');


// let salaries = {john:100,ann:160,pete:130};
// var sum = 0;
// for(let key in salaries){
//     sum = sum+salaries[key]
// }
// console.log(`sum of salaries : ${sum}`);

const menu2 = {
    width:400,
    height:600,
    title:"My menu"
}
console.log("aaaaaa    "+menu2.width)
menu2["new title"]=`My new menu title ${menu2.width}`
delete menu2.title;
menu2.width = 300;
console.log("aaaaaa    "+menu2.width)


function multiplyNumeric(menu){
for(let key in menu){
    if(typeof menu[key] == 'number'){
        var a = `${key}`;
        menu[key] = menu[key]*2;
    }
    if(key=="new title"){
        menu[key]=`My new menu title ${menu.width}`
    }
}
return menu;
}

var multiplyNumeric = multiplyNumeric(menu2);

console.log(multiplyNumeric);
console.log(`"height availability : "${"height" in menu2}`);

var i=0;
function getAllKeys(menu){
    var allKeys = [];
    for(let key in menu){
        allKeys[i]=key
        i++
    }
    return allKeys;
    }
    keys = getAllKeys(menu2);
    console.log("available keys : "+keys);
    let callStrReverse = strReverse();
    console.log(`callStrReverse ${callStrReverse}`)
    
