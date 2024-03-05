import { enc } from 'crypto-js'
import { useGetLoginResponseDTO } from './useGetLoginResponseDTO'

export const useGetUserInfo = (info: string) => {
  const token = useGetLoginResponseDTO()?.token
  if (!token) return undefined
  const decodedToken = enc.Utf8.stringify(enc.Base64.parse(token.split('.')[1]))
  if (!decodedToken) return ''
  const jsonToken = JSON.parse(decodedToken)
  return jsonToken[info] || ''
}
