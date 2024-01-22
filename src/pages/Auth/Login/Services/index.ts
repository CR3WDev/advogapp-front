import { useService } from '@services/useServices';
import { Login } from '../interfaces';

export const postLogin = () => {
	return useService().usePost<Login>('login', '/auth/login');
};
