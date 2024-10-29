import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
