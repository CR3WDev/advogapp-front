import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../../assets/icon.svg';
import { getI18n } from '../../../utils/hooks/useGetI18n';

export const RegisterPage = () => {
	const registerI18n = getI18n('register');
	const [value, setValue] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	//TODO: Trocar o import para um atalho no tsconfig.json
	return (
		<div>
			<div
				className="absolute cursor-pointer"
				style={{ top: 20, left: 20 }}
				onClick={() => {
					navigate('/');
				}}
			>
				<img src={img} alt="" style={{ borderRadius: 5, overflow: 'hidden' }} />
			</div>
			<div className="h-screen w-screen flex justify-content-center align-items-center">
				<div className="flex flex-column w-16rem">
					<div className="text-center">
						<h1>{registerI18n.title}</h1>
					</div>
					<div className="mb-3">
						<InputText
							className="w-full"
							value={value}
							placeholder={registerI18n.login}
							onChange={(e) => setValue(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<Password
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder={registerI18n.password}
							toggleMask
							inputStyle={{ width: '100%' }}
							feedback={false}
						/>
					</div>
					<div className="mb-3">
						<Button className="w-full" label={registerI18n.create_account} />
					</div>
					<div className="text-center">
						<div>
							<span>{registerI18n.already_have_an_account}</span>
							<span
								onClick={() => {
									navigate('/');
								}}
								className="no-underline hover:underline text-primary cursor-pointer ml-2"
							>
								{registerI18n.go_login}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
