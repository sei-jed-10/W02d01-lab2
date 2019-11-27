

// 1 Calculate the Cube
// Write a function `calculateCube` that takes a single number and prints the volume of a cube made from that number.


console.log(calculateCube(5));



// 2 Is a Vowel?
// Write a function `isAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

let isAVowel = function(letter)
{
    if (letter.length > 1)
    return false;
    if (letter.toUpperCase() === (('A')||('O')||('E')||('U')||('I')))
    return true;
    return false;

}

 console.log(isAVowel("sdjgd"));
console.log(isAVowel("a"));



// 3 Get Two Lengths
// Write a function `getTwoLengths` that accepts two parameters (strings). The function should return an _array_ of numbers where each number is the length of the corresponding string.

const getTwoLengths = function (s1 , s2 ){
  return [s1.length,s2.length];}
  
  console.log(getTwoLengths("Hank", "Hippopopalous"));


// 4 Get Multiple Lengths
// Write a function `getMultipleLengths` that accepts a single parameter as an argument: an **array of strings**. The function should return an array of **numbers** where each number is the length of the corresponding string.

const getMultipleLengths = function (s)
{
  let result = [];
  let i =0;
  while (i<s.length)
    {
     result.push(s[i].length); 

     i++;
    }
  return result;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// 5 Maximum of Three Numbers
// Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them. 
// If all numbers are the same, it doesn't matter which one is returned. 
// If the two largest numbers are the same, one of them should be returned.

const maxOfThree = function(num1,num2,num3)
{
    if (num1 > num2 )
        {
         if(num1 > num3)
            return num1;
            return num3;
        }
    else 
        {
           if (num2 < num3)
           return num3;
           return num2;

        }

}
console.log(maxOfThree(6, 9, 1));



// 6 Print Longest Word
// Write a function `printLongestWord` that accepts a single argument, an **array of strings**. 
// The method should return the longest word in the array. In case of a tie, 
// the method should return the word that appears first in the array.

const printLongestWord = function (words)
{
  let i = 0 ;let maxLength=0; let word = "";
  while (i < words.length)
  {
    if (words[i].length >= maxLength)
   { maxLength = words[i].length;
    word = words[i];}
    i++;
  }
  return word;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));



// 7 Transmogrify the Numbers
// Write a Javascript function called `transmogrify`. This function should accept three arguments,
//  which you can assume will be numbers. Your function should return the "transmogrified" result.
// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
// For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
// power of 2` is 225.

const transmogrify = function(a,b,c)
{
   if (isNaN(a || b || c ))
   return "Not numbers!";
   return (Math.pow((a*b),c));
   
} 
console.log(transmogrify(5, 3, 2));







