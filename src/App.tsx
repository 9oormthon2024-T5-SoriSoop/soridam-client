
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { Fragment } from 'react'
import Login from './page/login/Login'
import Noise from './page/noiseMeasurement/Noise'
import NavBar from './layout/navBar/NavBar'

function AppContent() {
  const location = useLocation();

  return (
    <Fragment>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/measure' element={<Noise />} />
      </Routes>
      {location.pathname !== '/login' && <NavBar />}
    </Fragment>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App
