import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { Fragment } from 'react'
import Login from './page/login/Login'
import Noise from './page/noiseMeasurement/Noise'
import NavBar from './layout/navBar/NavBar'
import NoiseRegister from './page/register/NoiseRegister'
import NoiseList from './page/noise_List/NoiseList'
import MeasureInfoPopup from './component/standard/NoiseStandard'
import { useAppSelector, useAppDispatch } from './hook/redux'
import NoiseMap from './page/noiseMap/NoiseMap'
import DeleteModal from './component/deleteModal/DeleteModal'
import { toggleDeleteModal } from './store/menu/menuSlice' // 액션 가져오기
import ErrorPage from './page/error/ErrorPage'
import NoiseDetail from './page/noiseDetail/NoiseDetail'


function AppContent() {
  const location = useLocation();
  const dispatch = useAppDispatch(); // dispatch를 사용하기 위한 훅
  const { infoModalOpen, delModalOpen } = useAppSelector((state) => state.menu);

  // 삭제 확인 시 실행할 함수
  const handleDelete = () => {
    console.log('삭제되었습니다.');
    dispatch(toggleDeleteModal(false)); // 모달 닫기
  };

  // 모달 닫기 함수
  const handleClose = () => {
    dispatch(toggleDeleteModal(false)); // 모달 닫기
  };

  return (
    <Fragment>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Noise />} />
        <Route path='/register' element={<NoiseRegister />} />
        <Route path='/save' element={<NoiseList />} />
        <Route path='/save/detail' element={<NoiseDetail />} />
        <Route path='/map' element={<NoiseMap />} />
        <Route path='/404' element={<ErrorPage />} />
        <Route path='/*' element={<Navigate to={"/404"} />} />
      </Routes>
      {
        location.pathname !== '/login' 
        && location.pathname !== '/register' 
        && location.pathname !== '/404'
        && <NavBar />}
      {infoModalOpen ? <MeasureInfoPopup /> : ''}
      {delModalOpen ? (
        <DeleteModal
          isOpen={delModalOpen}
          onClose={handleClose}
          onDelete={handleDelete}
        />
      ) : (
        ''
      )}
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

export default App;