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

export type Equation = string

type MathGroups = {
    operand1: string
    operand2 : string
    operation : string
}

type Results = string

const PARENTHESIS_REGEX = /\((?<equation>[^\(\)]*)\)/
const MULTIPLY_DIVIDE_REGEX = /(?<operand1>\S+)\s*(?<operation>[\/\*])\s*(?<operand2>\S+)/
const ADD_SUBTRACT_REGEX = /(?<operand1>\S+)\s*(?<operation>(?<!e)[\+\-])\s*(?<operand2>\S+)/
const EXPONENTS_REGEX = /(?<operand1>\S+)\s*(?<operation>\^)(?!.*\^.*)\s*(?<operand2>\S+)/

export function parse(equation: Equation): Results {

    const matchExponent = equation.match(EXPONENTS_REGEX)
    const matchMultiplyDivision = equation.match(MULTIPLY_DIVIDE_REGEX)
    const matchAddSubtract = equation.match(ADD_SUBTRACT_REGEX)
    const matchParenthesis = equation.match(PARENTHESIS_REGEX)
    if (matchParenthesis != null) {
        const subEquation: RegExpMatchArray | string | undefined = matchParenthesis?.groups?.equation
        const results = parse(subEquation as string)
        const newEquation = equation.replace(PARENTHESIS_REGEX, results)
        return parse(newEquation)
    } else if (matchExponent != null){
        const results = handleMath(matchExponent?.groups as MathGroups)
        const newEquation = equation.replace(EXPONENTS_REGEX, results?.toString())
        return parse(newEquation)
    } else if (matchMultiplyDivision != null) {
        const results = handleMath(matchMultiplyDivision?.groups as MathGroups)
        const newEquation = equation.replace(MULTIPLY_DIVIDE_REGEX, results?.toString())
        return parse(newEquation)
   } else if (matchAddSubtract != null) {
        const results = handleMath(matchAddSubtract?.groups as MathGroups)
        const newEquation = equation.replace(ADD_SUBTRACT_REGEX, results?.toString())
        return parse(newEquation)
   } else {
        const checkNumbers: number = parseFloat(equation)

        if (checkNumbers) {
            return equation
        } else {
            return "Please use numbers and operators only."
        }
   }
   
}

 function handleMath({ operand1, operand2, operation }: MathGroups): string{

    const number1 = parseFloat(operand1)
    const number2 = parseFloat(operand2)

    switch(operation) {
        case "^":
            return (number1 ** number2).toString()
        case "*":
            return (number1 * number2).toString()
        case "/":
            return (number1 / number2).toString()
        case "+":
            return (number1 + number2).toString()
        case "-":
            return (number1 - number2).toString()
        default: 
            return ""
    }
    
}
