
const myArr = [1, 2, 3, 4];
let sum=0;


for(let i = 0; i < myArr.length; i++) {

    sum += myArr[i];
}

console.log(sum);


//===================== Now lets use reduce =================================================

const sumArray = [1, 2, 3, 4].reduce(add,0);

function add(acc, a) {
    return acc + a;
}

console.log(sumArray);

// can also be written as 

const arr = [1, 2, 3, 4, 5, 6, 7];
let sumArr = arr.reduce((a,b) => {
    return a + b;
}, 0);

console.log(sumArr);