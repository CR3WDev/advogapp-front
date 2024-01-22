import { useService } from '@services/useServices';
import { Register } from '../interfaces';

export const postRegister = () => {
	return useService().usePost<Register>('register', '/auth/register');
};
