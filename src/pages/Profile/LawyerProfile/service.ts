import { useService } from '@services/useServices.ts'
import { useGetUserInfo } from '@utils/hooks/useGetToken.ts'

export const getLawyerInfo = () => {
  return useService().useGet("getLawyerInfo",`/lawyer/${useGetUserInfo('userId')}`,true)
}
