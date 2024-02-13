import { useService } from '@services/useServices.ts'
import { useGetUserInfo } from '@utils/hooks/useGetToken.ts'

export const getLawyerInfo = () => {
  const userId = useGetUserInfo('userId')

  return useService().useGet('getLawyerInfo', `/lawyer/${userId}`, true)
}
