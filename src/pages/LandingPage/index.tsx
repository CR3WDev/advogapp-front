import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
	const navigate = useNavigate();

	return (
		<div>
			teste de landing page
			<Button
				label="login"
				onClick={() => {
					navigate('/login');
				}}
			></Button>
		</div>
	);
};
