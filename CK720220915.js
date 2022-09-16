function sumTwoSmallestNumbers(numbers) {  
  let firstNum = Math.min(...numbers)
  numbers.splice(numbers.indexOf(firstNum), 1)
  let secondNum = Math.min(...numbers)
  console.log(firstNum + secondNum)
}

sumTwoSmallestNumbers([19, 5, 42, 2, 77])