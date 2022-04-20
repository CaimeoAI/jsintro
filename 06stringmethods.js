const stringExample = "AbCDEFGHiJKLMNoPQRSTuVWXYZ"


//? string.length property
console.log(stringExample.length); //! Gives you the sum of the characters(spaces included) in that string

//? index starts from 0 ....
console.log(stringExample[0]); //! Prints out the first character
console.log(stringExample[15]); //! Prints out the 16th character
console.log(stringExample[stringExample.length-1]); //! Prints out the last character(has to be length -1 since index starts from 0 instead of 1)

//? charAt method
console.log(stringExample.charAt(0));
console.log(stringExample.charAt(stringExample.length-1));

//? toLowerCase method
console.log(stringExample.toLowerCase()) //! Converts everything into lowercase (Doesn't accept any arguments)

//? toUpperCase method
console.log(stringExample.toUpperCase()) //! Converts everything into uppercase (Doesn't accept any arguments)

//? indexOf method
console.log(stringExample.indexOf("P")) //! Searches for the String P inside the given String and outputs the index of it's first occurence

