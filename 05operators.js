//! In JS we have 3 kinds of operators

//? arithmetic operator
//? conditional operator
//? logical operator

//TODO Arithmetic Operator
// + - * / % modulos ** exponential

console.log(2+2); // 4
console.log(3-1); // 2
console.log(4*3); // 12
console.log(10/5); // 2
console.log(10%3); // 1 [outouts the remainder]
console.log(2**3); // 2*2*2 = 8

// example with a variable

let a = 2;
// post increment operator [outputs starting value and adds 1 to it's stored value afterwards]
console.log(a++);
console.log(a);
// pre increment operator [Adds 1 to it's stored value and then output the new value]
console.log(++a);
console.log(a);

//TODO unary operator , binary operator
// the twos are  called operands the plus is called operator
//! Binary operator needs 2 operands: + - *
2 + 2

//! Unary operator needs only one operand: ++ -- typeof
2--

console.log(typeof "hello");
console.log(typeof true);
console.log(typeof 45);
console.log(typeof undefined);
console.log(typeof null); //! type of null becomes an object VERY IMPORTANT