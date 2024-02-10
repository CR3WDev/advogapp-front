import { useService } from '@services/useServices'

export const postLawyerList= () => {
  return useService().usePost('postLawyerList', '/lawyer/list')
}
