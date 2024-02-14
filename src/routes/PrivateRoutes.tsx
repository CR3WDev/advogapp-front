import { RegisterLawyer } from '@pages/Auth/RegisterLawyer'
import { HomeLogged } from '@pages/Home/HomeLogged'
import { NotFoundPage } from '@pages/NotFound'
import { LawyerProfilePage } from '@pages/Profile/LawyerProfile'
import { UserProfilePage } from '@pages/Profile/UserProfile'
import { Route, Routes } from 'react-router-dom'

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/register/lawyer" element={<RegisterLawyer />}></Route>
      <Route path="/lawyer/*" element={<LawyerProfilePage />}></Route>
      <Route path="/user/profile" element={<UserProfilePage />}></Route>
      <Route path="/home" element={<HomeLogged />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  )
}
