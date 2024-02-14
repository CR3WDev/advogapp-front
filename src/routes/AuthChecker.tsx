import { useGetLoginResponseDTO } from '@utils/hooks/useGetLoginResponseDTO'
import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

type AuthCheckerProps = {
  children: ReactElement
}
export const AuthChecker = ({ children }: AuthCheckerProps) => {
  const loginResponseDTO = useGetLoginResponseDTO()
  return loginResponseDTO ? children : <Navigate to="/login" replace />
}
