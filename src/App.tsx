import { PrimeReactProvider, addLocale } from 'primereact/api';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import pt from '../src/utils/i18n/pt.json';
import { ChangePassowrdPage } from './pages/Auth/ChangePassword';
import { LoginPage } from './pages/Auth/Login';
import { RegisterPage } from './pages/Auth/Register';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginPage />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
	{
		path: '/changepassword',
		element: <ChangePassowrdPage />,
	},
]);

const App = () => {
	//@ts-ignore
	addLocale('pt', pt);

	return (
		<>
			<PrimeReactProvider>
				<RouterProvider router={router} />
			</PrimeReactProvider>
		</>
	);
};

export default App;
