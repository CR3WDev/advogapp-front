import { PrimeReactProvider, addLocale } from 'primereact/api';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import pt from '../src/utils/i18n/pt.json';
import { GlobalToast } from './components/GlobalToast';
import { ChangePassowrdPage } from './pages/Auth/ChangePassword';
import { HomePage } from './pages/Auth/Home';
import { LoginPage } from './pages/Auth/Login';
import { RegisterPage } from './pages/Auth/Register';
import { Interceptor } from './services/interceptor';

const router = createBrowserRouter([
	{
		path: '/login',
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
	{
		path: '/',
		element: <HomePage />,
	},
]);

const App = () => {
	//@ts-ignore
	addLocale('pt', pt);

	return (
		<>
			<PrimeReactProvider>
				<Interceptor>
					<RouterProvider router={router} />
				</Interceptor>
			</PrimeReactProvider>
			<GlobalToast />
		</>
	);
};

export default App;
