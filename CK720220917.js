/*
Sort array by string length

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

function sortByLength (array) {
    console.log(array.sort((element1, element2) => { 
        return element1.length - element2.length;}))
  };

//Solution

// const sortByLength = array => array.sort((element1, element2) => element1.length - element2.length)


sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])

sortByLength(["Beg", "Life", "I", "To"])





// var number=function(array){
//     console.log(array.map((item, index) => `${index + 1}: ${item}`))
//   }

// number(['a', 'b', 'c'])