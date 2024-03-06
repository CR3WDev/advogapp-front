import { ChangePasswordPage } from '@pages/Auth/ChangePassword'
import { ForgotPasswordPage } from '@pages/Auth/ForgotPassword'

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { AuthChecker } from './AuthChecker'
import { PrivateRoutes } from './PrivateRoutes'
import { RegisterPage } from '@pages/Auth/Register'
import { LoginPage } from '@pages/Auth/Login'
import { HomeNotLoggedPage } from '@pages/Home/HomeNotLogged'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/forgotpassword" element={<ForgotPasswordPage />}></Route>
      <Route path="/changepassword" element={<ChangePasswordPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/" element={<HomeNotLoggedPage />}></Route>
      <Route
        path="*"
        element={
          <AuthChecker>
            <PrivateRoutes />
          </AuthChecker>
        }
      ></Route>
    </Route>,
  ),
)
