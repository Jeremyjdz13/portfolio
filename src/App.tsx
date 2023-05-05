import { Routes, Link, Route} from 'react-router-dom'
import Minesweeper from './minesweeper/minesweeper'
import './App.css'
import Home from './pages/home'
import MathSolver from './mathSolver/mathSolver'

function App() {

  return (
    <div>
      <div>Jeremy Diaz</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/minesweeper">Minesweeper</Link>
        <Link to="/mathsolver">Math Solver</Link>
      </nav>
      <Routes>
        <Route path="/minesweeper" element={<Minesweeper />} />
        <Route path="/*" element={<Home />} />
        <Route path="/mathsolver" element={<MathSolver />} />
      </Routes>
    </div>
  )
}

export default App
