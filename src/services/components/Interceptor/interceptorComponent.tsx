import { useGetLoginResponseDTO } from '@utils/hooks/useGetLoginResponseDTO.ts'
import { showToastError } from '@components/GlobalToast'
import { api } from '../../axios.ts'
import { ErrorTypes } from '../../enum.ts'
import { ErrorResponse } from '../../ServicesInterfaces.ts'

export const InterceptorComponent = ({ children }: any) => {
  api.interceptors.request.use(
    (config: any) => {
      const LoginResponseDTO = useGetLoginResponseDTO()
      if (LoginResponseDTO?.token) {
        config.headers.Authorization = `Bearer ${LoginResponseDTO?.token}`
      }
      return config
    },
    (error: any) => {
      return Promise.reject(error)
    },
  )

  api.interceptors.response.use(
    (response: any) => {
      return response
    },
    (error: any) => {
      const errorResponse: ErrorResponse = error?.response?.data?.ApiException
      if (!errorResponse) return Promise.reject(error)

      if (errorResponse.httpStatus === ErrorTypes.BadRequest) {
        showToastError(errorResponse.message)
        throw new Error(errorResponse.message)
      }
      return Promise.reject(error)
    },
  )

  return children
}
