import { NotFoundPage } from '@pages/NotFound'

import { Route, Routes } from 'react-router-dom'
import { RegisterLawyerPage } from '@pages/Auth/RegisterLawyer'
import { LawyerProfilePage } from '@pages/LawyerProfile'
import { UserProfilePage } from '@pages/UserProfile'
import { HomeLoggedPage } from '@pages/Home/HomeLogged'

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/register/lawyer" element={<RegisterLawyerPage />}></Route>
      <Route path="/lawyer/*" element={<LawyerProfilePage />}></Route>
      <Route path="/user/*" element={<UserProfilePage />}></Route>
      <Route path="/home" element={<HomeLoggedPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  )
}
