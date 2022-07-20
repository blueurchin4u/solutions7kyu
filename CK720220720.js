/*
Square Every Digit

1. Convert numbers to strings, then an array of digits
2. Square each digit. Because JavaScript has automatic type coercion, it will quietly convert each string
    into a number to perform multiplication const squaredDigits = digits.map(n => n * n)
3. Join each digit together, then use the + operator to convert the string into a number
*/
const squareDigits = num => {
    const individualDigits = num.toString().split('')
    const squaredDigits = individualDigits.map(n => n * n)
    const squaredNumber = squaredDigits.join('')
    return +squaredNumber
}