import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../../assets/icon.svg';
import { getI18n } from '../../../utils/hooks/useGetI18n';

export const ChangePassowrdPage = () => {
	const changePasswordI18n = getI18n('changePassword');
	const [value, setValue] = useState('');
	const navigate = useNavigate();

	return (
		<div>
			<div
				className="absolute"
				style={{ top: 20, left: 20 }}
				onClick={() => {
					navigate('/');
				}}
			>
				<img src={img} alt="" style={{ borderRadius: 5, overflow: 'hidden' }} />
			</div>
			<div className="h-screen w-screen flex justify-content-center align-items-center">
				<div className="flex flex-column w-16rem">
					<div className="text-center mb-3">
						<h1 className="m-0">{changePasswordI18n.title}</h1>
						<span>{changePasswordI18n.description}</span>
					</div>
					<div className="mb-3">
						<InputText
							className="w-full"
							value={value}
							placeholder={changePasswordI18n.email}
							onChange={(e) => setValue(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<Button className="w-full" label={changePasswordI18n.send} />
					</div>
					<div className="text-center">
						<span
							onClick={() => {
								navigate('/');
							}}
							className="no-underline hover:underline text-primary cursor-pointer ml-2"
						>
							{changePasswordI18n.back}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
