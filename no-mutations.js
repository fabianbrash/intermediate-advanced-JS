const state = {
    foreground: '#999999',
    background: '#FFFFFF'
};


/*const declarativeMakeBackgroundBlack = state => {
    return {...state, background: '#000000'};
}*/

// the above can also be written as, and note I've also added the () around state
// visually it just clarifies things for me
// also note that I am setting default values for our object literal, when I called the function
// I forgot to pass the state, again no () so I didn't think about the fact that the function takes an argument
// so I got a weird result it just returned the new background color and nothing else, then I realized that I 
// forgot to pass the state prop and once I did the result was correct, but by adding a default value it helps
// if you forget to send a prop to the function

const declarativeMakeBackgroundBlack = (state = { foreground: '#999999', background: '#FFFFFF' }) => ({ ...state, background: '#000000' });

const newState = declarativeMakeBackgroundBlack(state);

console.log(state);
console.log(newState);

const turtles = ['Galapagos Tortoise', 'Green Tortoise'];

//const imperativeAddTurtle = (turtle) => turtles.push(turtle);

//const newTurtle = imperativeAddTurtle('Alexander Tortoise');

// This changes the original array, which is not good.

console.log(turtles);

const declarativeAddTurtle = (turtles) => (turtle = 'You did not send me a Tortoise') => [...turtles, turtle];
// takes 'array of turtles' and the 'new turtle' as its input.
// It returns new array of turtles without changing the original array
// note I am also setting a default value for turtle as a reminder that you need to pass me a tortoise
// also note () again.


const newTurtle = declarativeAddTurtle(turtles);
console.log(newTurtle('Alexander Tortoise'));

//Original unchanged []
console.log(turtles);