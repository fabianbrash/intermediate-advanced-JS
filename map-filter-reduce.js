
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


// better example is with an array of object literal

const users = 
[
{
    name: 'user1',
    status: 'single',
    age: 21,
},
{
    name: 'user2',
    status: 'married',
    age: 31,
},
{
    name: 'user3',
    status: 'single',
    age: 25
},
];

console.log(users.map((user) => user.status));