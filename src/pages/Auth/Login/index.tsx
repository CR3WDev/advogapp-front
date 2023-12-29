import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Toast } from 'primereact/toast';
import { useRef, useState } from 'react';

export const LoginPage = () => {
	const [value, setValue] = useState('');
	const toast = useRef<Toast>(null);
	const [password, setPassword] = useState('');

	const show = () => {
		toast.current?.show({
			severity: 'success',
			summary: 'Sucesso',
			detail: 'Usuário Logado com sucesso!',
		});
	};

	return (
		<>
			<Toast ref={toast} />
			<div className="flex flex-column w-14rem">
				<div className="mb-2">
					<InputText
						className="w-full"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
				<div className="mb-2">
					<Password
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						toggleMask
						inputStyle={{ width: '100%' }}
						feedback={false}
					/>
				</div>
				<div>
					<Button className="w-full" onClick={show}>
						Login
					</Button>
				</div>
			</div>
		</>
	);
};
