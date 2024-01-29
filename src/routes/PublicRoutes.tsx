import { ChangePassowrdPage } from '@pages/Auth/ChangePassword'
import { LoginPage } from '@pages/Auth/Login'
import { RegisterPage } from '@pages/Auth/Register'
import { RegisterLawyer } from '@pages/Auth/RegisterLawyer'
import { HomePage } from '@pages/Home'
import { NotFoundPage } from '@pages/NotFound'
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
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
