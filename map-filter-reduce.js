
// reduce

const arr = [1, 2, 3, 4, 5, 6, 7];
let sumArr = arr.reduce((a,b) => {
    return a + b;
}, 0);

console.log(sumArr);



// ============================= filter =============================

const words = ['spray', 'dog', 'cat', 'exuberant', 'destruction'];

const result = words.filter((word) => word.length > 6);

console.log(result);


// ============================= map =============================

const myArr = ['dog', 'cat', 'horse', 'cow'];

console.log(myArr.map((r) => r));