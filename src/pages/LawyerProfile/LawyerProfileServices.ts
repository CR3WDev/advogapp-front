import { useService } from '@services/useServices.ts'

export const getLawyerInfo = (userId: string) => {
  return useService().useGet('getLawyerInfo', `/lawyer/${userId}`, true)
}
export const putEditLawyer = (lawyerId:string) => {
  return useService().usePut('putEditLawyer', `/lawyer/${lawyerId}`)
}
export const getSpecializations = () => {
  return useService().useGet('getSpecializations', `/lawyer/specializations`,true)
}
