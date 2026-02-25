import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  
  return (
    <Router>
      <div className='App'>
        <div className='content'>
          
          <Routes>
            {/*Ruta principal-- profile  */}
            <Route path="/" element={<ProfilePage />}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
  
}


export default App
