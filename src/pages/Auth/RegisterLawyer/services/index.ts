import { useService } from '@services/useServices'

export const postRegister = () => {
  return useService().usePost<any>('register', '/lawyer')
}
