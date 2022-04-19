//* Variable
//? Variables are like a container holding value withing the memory

//! Three Different ways to define variables

//? var firstName = "John"; (avoid using var)
//? let firstName = "John";
//? const firstName = "John";

//! Execution of code in js is from top to bottom and left to right

// var lastName = "Smith";

// console.log(lastName);

// var lastName = "Naqvi";

// console.log(lastName);


//! let will not allow you to redefine your variable, but you can overwrite it
//? Defining a Variable = Assignment Operator 

let lastName = "Smith";

lastName = "John";

console.log(lastName);


//? Always use const unless you are sure that the value get changed in the future

const firstName = "Bob";

console.log (firstName);

// Variables names should start with character/alphabet ,$ or _(underscore)
let $example = "Neo";
let _example = "Neo";
let example = "Neo";

// Other characters will result in an error
let %example = "Neo";


//* 3 Case of Defining Variable
//? camelCase
// lastName

//? snake_case
// last_name

//? PascalCase
// LastName

