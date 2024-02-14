import { useService } from '@services/useServices.ts'

export const getLawyerInfo = (userId: string) => {
  return useService().useGet('getLawyerInfo', `/lawyer/${userId}`, true)
}
