// var person = {
//     "name":"sdfdsf",
//     "age":45,
//     "mobile":54444,
//     "address":"adfadsfadsfaef"
// }

// // let name = person['name'];
// // let age = person['age'];
// let {name,age,address} = person;
// console.log(name,age,address);

var numList = [1,5,8,6,8,9];
var [a,c,...d] = numList;
console.log(a);
console.log(c);
console.log(d);
console.log("-----------------");

var ar1 = [1,5,6,8,9];
var ar2 = [2,7,4];
var ar3 = [12,17,14];
var ar4 = [...ar1,...ar2,...ar3];//merging two arrays
console.log(ar4);