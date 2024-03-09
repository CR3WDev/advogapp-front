import { useService } from '@services/useServices.ts'

export const postRecoverPassword = () => {
  return useService().usePost<any>('recoverPassword', '/public/recoverpassword')
}
