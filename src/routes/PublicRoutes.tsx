import { ChangePassowrdPage } from '@pages/Auth/ChangePassword'
import { LoginPage } from '@pages/Auth/Login'
import { RegisterPage } from '@pages/Auth/Register'
import { RegisterLawyer } from '@pages/Auth/RegisterLawyer'
import { HomePage } from '@pages/Home'
import { NotFoundPage } from '@pages/NotFound'
import { LawyerProfilePage } from '@pages/Profile/LawyerProfile'
import { UserProfilePage } from '@pages/Profile/UserProfile'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/registerlawyer',
    element: <RegisterLawyer />,
  },
  {
    path: '/changepassword',
    element: <ChangePassowrdPage />,
  },
  {
    path: '/lawyerprofilepage',
    element: <LawyerProfilePage />,
  },
  {
    path: '/userprofilepage',
    element: <UserProfilePage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
