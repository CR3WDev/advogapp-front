import imgUserDefault from '@assets/fotoUsuarioBase.png';
import { Rating } from 'primereact/rating';
import './index.scss';

export const AdvItem = (props: {
	nome: string;
	especializacao: string;
	nota: number;
	numReviews: number;
	sobre: string;
}) => {
	return (
		<div className="my-3 flex card__advogado card card__two">
			<div className=" flex justify-content-center">
				<img
					src={imgUserDefault}
					style={{
						width: '100px',
						height: '100px',
					}}
					className="mx-4"
				/>
				<div className="ml-4 mr-6">
					<h2 className="my-2">{props.nome} </h2>
					<span>{props.especializacao} </span>
				</div>
				<div className="max-width-sobre">{props.sobre} </div>
			</div>
			<div className="ml-4 mr-8">
				<Rating value={props.nota} readOnly cancel={false} className="mb-3" />
				<span className="ml-1">{props.numReviews} avaliações</span>
			</div>
		</div>
	);
};
