import './app.scss'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from 'react-router-dom'
import Home from './pages/home/Home'
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login'

function App() {
  return(
    <Router>
      <Routes>
        <Route
        exact 
        path='/'
        element={<Home />}
        />
        <Route 
        path='/movies'
        element={<Home type='movies' />}
        /> 
        <Route />
        <Route 
        path='/series'
        element={<Home type='series' />}
        /> 
        <Route />
      </Routes>
    </Router>
  )
}

export default App;
