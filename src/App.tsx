import { Routes, Link, Route} from 'react-router-dom'
import Minesweeper from './minesweeper/minesweeper'
import './App.ts'
import { appStyles } from './App.ts'
import Home from './pages/home'
import MathSolver from './mathSolver/mathSolver'

function App() {

  return (
    <div>
      <div style={appStyles.menuContainer}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/minesweeper">Minesweeper</Link>
          <Link to="/mathsolver">Math Solver</Link>
        </nav>
      </div>
      <div style={appStyles.orangeContainer}>
        <Routes>
          <Route path="/minesweeper" element={<Minesweeper />} />
          <Route path="/*" element={<Home />} />
          <Route path="/mathsolver" element={<MathSolver />} />
        </Routes>
      </div>
      <div style={appStyles.titleContainer}>
        {/* <img 
          src="/src/assets/images/JeremyDiazTitle_Portfolio.png" 
        ></img> */}
      </div>
      <div style={appStyles.blueContainer}>
        Up Side Down
      </div>
    </div>
  )
}

export default App


//Note: style={{...appStyles.title, ...appStyles.blackContainer}} adding more than one property.