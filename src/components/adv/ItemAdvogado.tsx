import { Rating } from "primereact/rating";

export const AdvItem = (props: {
  nome: string;
  especializacao: string;
  nota: number;
  numReviews: number;
}) => {
  return (
    <div
      className="my-3 flex align-items-center justify-content-between"
      style={{
        //backgroundColor: "#88A9C3",
        cursor: "pointer",
        height: "20vh",
        borderRadius: 5,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid #ccc",
        // padding: "10px",
      }}
    >
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
