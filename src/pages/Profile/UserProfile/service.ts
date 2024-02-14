import { useService } from '@services/useServices.ts'

export const getUserInfo = (userId: string) => {
  return useService().useGet('getUserInfo', `/user/${userId}`, true)
}
export const postUpdateUser = () => {
  return useService().usePost('postUpdateUser', `/user`)
}
