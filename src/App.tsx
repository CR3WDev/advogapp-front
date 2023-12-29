import { PrimeReactProvider } from 'primereact/api';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
]);

const App = () => {
	return (
		<>
			<PrimeReactProvider>
				<RouterProvider router={router} />
			</PrimeReactProvider>
		</>
	);
};

export default App;
