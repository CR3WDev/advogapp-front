import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

type AuthCheckerProps = {
  children: ReactElement
}
export const AuthChecker = ({ children }: AuthCheckerProps) => {
  const token = sessionStorage.getItem('token')
  return token ? children : <Navigate to="/login" replace />
}
