import { useService } from '@services/useServices.ts'
import { useGetUserInfo } from '@utils/hooks/useGetUserInfo'

export const getUserInfo = () => {
  return useService().useGet('getUserInfo', `/user/${useGetUserInfo('userId')}`, true)
}
export const postUpdateUser = () => {
  return useService().usePost('postUpdateUser', `/user`)
}
