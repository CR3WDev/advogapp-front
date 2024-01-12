import { Button } from 'primereact/button';
import img from '../../../assets/icon.svg';
import { getI18n } from '../../../utils/hooks/useGetI18n';

export const HomePage = () => {
	const loginI18n = getI18n('login');

	return (
		<div className="h-screen w-screen flex flex-column">
			<header className="flex w-screen h-6rem align-items-center justify-content-between">
				<div className="flex">
					<div className="flex align-items-center">
						<img src={img} style={{ borderRadius: 5 }} className="mx-2" />
					</div>
					<div className="flex align-items-center">
						<span>Encontrar Advogados</span>
					</div>
				</div>
				<div>
					<Button
						outlined
						className="mr-2"
						label="login"
						severity="secondary"
						icon="pi pi-user"
						iconPos="right"
					></Button>
				</div>
			</header>
			<main
				className="flex bg-primary"
				style={{ height: 'calc(100vh - 6rem)' }}
			>
				aaa
			</main>
		</div>
	);
};
