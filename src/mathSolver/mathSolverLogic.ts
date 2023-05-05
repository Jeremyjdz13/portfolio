/*
The order of operations for solving an equation that uses addition, subtraction, division, multiplication, and exponentials is commonly remembered using the acronym PEMDAS:

1. Parentheses: Evaluate expressions inside parentheses first.
2. Exponents: Evaluate exponential expressions next.
3. Multiplication and Division: Evaluate multiplication and division from left to right.
4. Addition and Subtraction: Evaluate addition and subtraction from left to right.

Here's an example equation using PEMDAS:

6 + 3 × 2² ÷ (4 - 2)

Parentheses: Solve the expression inside the parentheses first, which is (4-2) = 2.
6 + 3 × 2² ÷ 2

Exponents: Solve the exponent next, which is 2² = 4.
6 + 3 × 4 ÷ 2

Multiplication and Division: Solve multiplication and division from left to right, which is 3 × 4 = 12 and 12 ÷ 2 = 6.
6 + 6

Addition and Subtraction: Solve addition and subtraction from left to right, which is 6 + 6 = 12.
Therefore, the solution to the equation is 12. 
*/

export function checkForOrderOfOperation(arr: string[]) {
    const parentheses = []
    const exponent = []
    const multiplication = []
    const division = []
    const addition = []
    const subtraction = []

    // const numbersToAdRegex = /\d+(?=\s*\+|\b\s)/g
    // addition.push(arr.match(numbersToAdRegex))

    // console.log(addition)
   solveProblem(arr)

}

function solveProblem (arr: string[]) {
    console.log(arr)
}

 function addition() {

}

 function subtraction() {

}

 function division() {

}

 function multiplication() {

}
