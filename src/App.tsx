
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { Fragment } from 'react'
import Login from './page/login/Login'
import Noise from './page/noiseMeasurement/Noise'
import NavBar from './layout/navBar/NavBar'
import NoiseRegister from './page/register/NoiseRegister'
import NoiseList from './page/noiseList/NoiseList'
import MeasureInfoPopup from './component/standard/NoiseStandard'
import { useAppSelector } from './hook/redux'
import NoiseMap from './page/noiseMap/NoiseMap'
import DeleteModal from './component/deleteModal/DeleteModal'

function AppContent() {
  const location = useLocation();
  const { modalOpen, delModalOpen } = useAppSelector((state) => state.menu);

  return (
    <Fragment>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/measure' element={<Noise />} />
        <Route path='/register' element={<NoiseRegister/>} />
        <Route path='/save' element={<NoiseList/>} />
        <Route path='/' element={<NoiseMap/>} />
      </Routes>
      {location.pathname !== '/login' && <NavBar />}
      { modalOpen ? <MeasureInfoPopup/> : ''}
      { delModalOpen ? <DeleteModal /> : ''}
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
