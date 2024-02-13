import { ChangePasswordPage } from '@pages/Auth/ChangePassword'
import { LoginPage } from '@pages/Auth/Login'
import { RegisterPage } from '@pages/Auth/Register'
import HomeNotLogged from '@pages/Home/HomeNotLogged'
import { NotFoundPage } from '@pages/NotFound'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { AuthChecker } from './AuthChecker'
import { PrivateRoutes } from './PrivateRoutes'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/changepassword" element={<ChangePasswordPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/" element={<HomeNotLogged />}></Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route
        path="*"
        element={
          <AuthChecker>
            <PrivateRoutes />
          </AuthChecker>
        }
      ></Route>
    </Route>
  )
)
