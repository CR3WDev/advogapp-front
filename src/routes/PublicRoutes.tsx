import { ChangePassowrdPage } from '@pages/Auth/ChangePassword';
import { LoginPage } from '@pages/Auth/Login';
import { RegisterPage } from '@pages/Auth/Register';
import { LandingPage } from '@pages/LandingPage';
import { NotFoundPage } from '@pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';
import { AuthChecker } from './AuthChecker';
import { PrivateRoutes } from './PrivateRoutes';

export const router = createBrowserRouter([
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/landingpage',
		element: <LandingPage />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
	{
		path: '/changepassword',
		element: <ChangePassowrdPage />,
	},
	{
		path: '/',
		element: <AuthChecker />,
		children: PrivateRoutes,
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);
