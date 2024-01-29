import { showToastError } from '../components/GlobalToast'
import { api } from './axios'
import { ErrorTypes } from './enum'
import { ErrorResponse } from './types'

export const Interceptor = ({ children }: any) => {
  api.interceptors.request.use(
    (config) => {
      const token = sessionStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      const errorResponse: ErrorResponse = error?.response?.data
      if (!errorResponse) return Promise.reject(error)

      if (errorResponse.httpStatus === ErrorTypes.BadRequest) {
        showToastError(errorResponse.message)
        throw new Error(errorResponse.message)
      }
      return Promise.reject(error)
    }
  )

  return children
}
