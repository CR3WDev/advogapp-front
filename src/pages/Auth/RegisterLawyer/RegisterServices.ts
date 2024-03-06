import { useService } from '@services/useServices.ts'

export const postRegister = () => {
  return useService().usePost<any>('register', '/lawyer')
}
