import { enc } from 'crypto-js'

export const useGetUserRole = () => {
  const token: string = sessionStorage.getItem('token') || ''
  const decodedToken = enc.Utf8.stringify(enc.Base64.parse(token.split('.')[1]))
  if (!decodedToken) return ''
  const jsonToken = JSON.parse(decodedToken)
  return jsonToken?.role || ''
}

export const useGetUserEmail = () => {
  const token: string = sessionStorage.getItem('token') || ''
  const decodedToken = enc.Utf8.stringify(enc.Base64.parse(token.split('.')[1]))
  if (!decodedToken) return ''
  const jsonToken = JSON.parse(decodedToken)
  return jsonToken?.email || ''
}
