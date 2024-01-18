import { Rating } from "primereact/rating";
import "./card.scss";

export const AdvItem = (props: {
  nome: string;
  especializacao: string;
  nota: number;
  numReviews: number;
}) => {
  return (
    <div className="my-3 flex card__advogado card card__one">
      <div className="ml-8">
        <h2>{props.nome} </h2>
        <span>{props.especializacao} </span>
      </div>
      <div className="mr-8">
        <Rating value={props.nota} readOnly cancel={false} className="mb-3" />
        <span className="ml-1">{props.numReviews} avaliações</span>
      </div>
    </div>
  );
};
