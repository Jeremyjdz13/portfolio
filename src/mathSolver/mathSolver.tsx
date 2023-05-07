import { useRef } from "react"
import { checkForOrderOfOperation } from "./mathSolverLogic"

export default function MathSolver() {
    const inputRef = useRef<HTMLInputElement>(null)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            if (inputRef.current !== null) {
                const problem = inputRef.current.value
                const problemArray = problem.split("")
                console.log( ), "Problem")
                checkForOrderOfOperation(problemArray)
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
                <div>This Math solver can solve for addition, subtraction, division, and multiplication. </div>
            </div>
        </>
       
    )
}