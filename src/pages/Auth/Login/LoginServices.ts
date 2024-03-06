import { useService } from '@services/useServices.ts'
import { Login } from './LoginInterfaces.ts'

export const postLogin = () => {
  return useService().usePost<Login>('login', '/auth/login')
}
