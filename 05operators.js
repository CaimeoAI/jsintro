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

//TODO convert any number into string or any string into a number and vice versa
let num = 23;
console.log(String(num));

let text = "34";
console.log(Number(text));





//TODO conditional operator
//? < , > ,<= , >= , != , == abstract comparison , !== , === strict comparison

console.log(1<2); //true
console.log(1>2); //false

console.log(2<=2); //true
console.log(3>=3); //true
console.log(3 == "3"); //javascript willn't check datatype
console.log(3 === "3"); //false ,javascript will check datatype
console.log("hello" !== "World") // true

let sum = 2+5; // statement
//* statement : instruction to javascript to do something

//!expresssion :value itself or anything will become a value is called expression;
// "hello " + " World "  => hello World
// 1+2+3+4  => 10 Arithmetic expresssion
// 1 < 2  => conditional expression
// 1<2 && 2>1 => logical expression



//logical operators

// && AND * ,  || OR + , ! NOT

// && 0 1 => 0, 
//    1 0 => 0,
//    1 1 => 1,
//    0 0 => 0
/* 1<2   and  4>5  */
console.log(1<2 && 4>5 && 2>3)   // false  => 1 * 0 * 0 = 0

console.log(1<2 || 4>5 || 2>3)   // true  => 1 + 0 + 0 = 1
console.log(!true) //false



/* const experience = 1; 
const degree = true; 

console.log(experience >=1 || degree===true) */