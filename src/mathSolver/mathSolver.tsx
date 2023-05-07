import { useRef, useState } from "react"
import { parse, Equation } from "./mathSolverLogic"

export default function MathSolver() {
    const inputRef = useRef<HTMLInputElement>(null)
    const [results, setResults] = useState<string>("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            if (inputRef.current !== null) {
                const equation: Equation = inputRef.current.value
                const results = parse(equation)
                
                return setResults(results)
            }
        } catch (error) {
            console.log(error, "You have an error")
        }
        
    }

    return (
        <> 
        <div>MathSolver</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Enter equation</label>
                    <input ref={inputRef} type="text"/>
                    <button type="submit">Solve</button>
                </form>
                <div>This Math solver can solve for addition, subtraction, division, and multiplication.</div>
                <div>For better results use a space between characters.</div>
                <div>{results}</div>
            </div>
        </>
       
    )
}