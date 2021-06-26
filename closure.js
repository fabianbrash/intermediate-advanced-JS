function myFunc() {
    let greeting = "Hello closure...";
    function display(){
        console.log(greeting);
    }
    display();

}

myFunc();

// With parenthesis
const arrowFunc = (greeting) => (name) => `${greeting}, ${name}!`

//Without parenthesis
//const arrowFunc = greeting => name => `${greeting}, ${name}!`


const myGreeting = arrowFunc('Hello');

console.log(myGreeting('Fabian'));

/* ====================== Note the above is equivalent to ================ */

function myFuncs(greetings){
    return function(name){
        return `${greetings}, ${name}!`
    }
}

const myGreetings = myFuncs('Who are you?');
console.log(myGreetings('Batman'));
