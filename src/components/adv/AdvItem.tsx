export const AdvItem = (props: {
  nome: string;
  especializacao: string;
  nota: string;
}) => {
  return (
    <div
      className="my-3 flex align-items-center"
      style={{
        //backgroundColor: "#88A9C3",
        height: "20vh",
        borderRadius: 5,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <div>
        <span>{props.nome}, </span>
        <span>{props.especializacao}, </span>
        <span>{props.nota}</span>
      </div>
    </div>
  );
};
