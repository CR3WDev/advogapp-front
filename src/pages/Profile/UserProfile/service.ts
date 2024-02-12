import { useService } from '@services/useServices.ts'
import { useGetUserInfo } from '@utils/hooks/useGetToken.ts'

export const getUserInfo = () => {
  return useService().useGet("getUserInfo",`/user/${useGetUserInfo('userId')}`,true)
}
