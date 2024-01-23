import { Navigate, Outlet } from 'react-router-dom';

export const AuthChecker = () => {
	const token = sessionStorage.getItem('token');
	return token ? <Outlet /> : <Navigate to="/login" replace />;
};
