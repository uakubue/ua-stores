import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './utils/ProtectedRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route element={<ProtectedRoutes />}>
            
          </Route>

          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
