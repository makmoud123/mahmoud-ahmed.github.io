// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    
      // a. Create an empty string that will collect the output
      var newString = "";
   
      // b. Create the FOR loop

      /* The starting point of the loop will be (str.length - 1) which corresponds to the 
         last character of the string, "o"
         As long as i is greater than or equals 0, the loop will go on
         We decrement i after each iteration */

         /* C. Access individual strings
      End of the FOR Loop*/
      for (var i = input.length - 1; i >= 0; i--) { 
        // d. Concatenation newString = newString + input[i];
          newString += input[i]; 
      }
      
   
      // Return the reversed string
      return newString; // "olleh"
  
   
  console.log(reverseString('hello'));
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}