/*
Sum of odd numbers

Given the triangle of consecutive odd numbers:

             1                  1
          3     5               8   2^3
       7     9    11            27  3^3
   13    15    17    19         64  4^3
21    23    25    27    29      125 5^3
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

Parameters
A triangle of consecutive odd numbers with n rows, where it starts with 1, input is row number

Results
The sum of the numbers in row n

Pseudocode

*/

function rowSumOddNumbers(n) {
    let solution = Math.pow(n, 3)
    console.log(n)
}

//Solution
const rowSumOddNumbers = n => Math.pow(n, 3)



