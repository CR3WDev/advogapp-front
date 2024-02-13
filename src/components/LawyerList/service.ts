import { useService } from '@services/useServices'

export const postLawyerList = () => {
  return useService().usePost('postLawyerList', '/lawyer/list')
}

export const getLawyerListPublic = () => {
  return useService().useGet('getLawyerListPublic', '/public/lawyer/list', true)
}
