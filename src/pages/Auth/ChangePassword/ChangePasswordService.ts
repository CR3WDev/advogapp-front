import { useService } from '@services/useServices.ts'

export const postResetPassword = () => {
  return useService().usePost<any>('recoverPassword', '/public/resetpassword')
}
