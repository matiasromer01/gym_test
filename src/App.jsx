import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import ProgressPage from './pages/ProgressPage';
import './App.css'
import ASidebar from './components/ASide.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">      
        <ASidebar />             
        <div className="content">
          
          <Routes>
            {/*Ruta principal-- progress  */}
            
            <Route path="/" element={<ProgressPage />}/>
            <Route path="/progress" element={<ProgressPage />}/>
          
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
