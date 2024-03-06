import { useService } from '@services/useServices.ts'
import { Register } from './RegisterInterfaces.ts'

export const postRegister = () => {
  return useService().usePost<Register>('register', '/auth/register')
}
