import { useService } from '@services/useServices'

export const lawerListByPage = () => {
  return useService().usePost('lawyer_list', '/lawyer/list')
}
