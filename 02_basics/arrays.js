/*
copy operation creates shallow copy rather than deep copy.
In deep copy source and copy are completely independent.

*/
// **************

    myArr = [1,2,3,4,5,6,7,8,9]
    // myArr.unshift(0);   // Push front
    // myArr.shift();      // Pop front
    // const newArr = myArr.join()
    // console.log(myArr);

// ********************

// slice, splice
// console.log("A ", myArr);
// const myArr1 = myArr.slice(1,3);
// console.log(myArr1)
// console.log("B ", myArr);

// const myArr2 = myArr.splice(1,3);
// console.log(myArr2);
// console.log("C ", myArr);

// ******************************

const marvelHeros = ["thor", "loki", "ironman"]
const dcHeros = ["batman","superman","joker"]

// console.log(marvelHeros.concat(dcHeros))
//spread operator
const allHeros = [...marvelHeros, ...dcHeros]
console.log(allHeros)

const anotherArray = [1,2,[3,4],[5,6,[7,8,[9,0]]]]
console.log(anotherArray.flat(Infinity))

// *********************** 

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));


