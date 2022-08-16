/*
Find the capitals

Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

1.  We are going to create an empty array
2.  We are then going to loop through the index of the word's characters in the array, and if the index of the character of the word is equal to an Upper case character, then we are going to push that index to the 'output' variable. 
*/

// const capitals = word => {
// 	let output = [];
//     for (let i=0; i<word.length; i++) {
//         if (word[i] == word[i].toUpperCase()) {
//         output.push(i);
//         }
//     }
//   console.log(output);
// };
// 
// capitals('CodEWaRs')


// Solution


const capitals = word => {
	let output = [];
    for (let i=0; i<word.length; i++) {
        if (word[i] == word[i].toUpperCase()) {
        output.push(i);
        }
    }
  return output
};
