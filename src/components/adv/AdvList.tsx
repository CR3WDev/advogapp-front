import { AdvItem } from "./AdvItem";

export const AdvList = (props: { items: any[] }) => {
  if (props.items.length === 0) {
    return <h4>Nenhum advogado encontrado.</h4>;
  }
  return (
    <ul>
      {props.items.map((adv) => (
        <AdvItem
          nome={adv.nome}
          especializacao={adv.especializacao}
          nota={adv.nota}
          numReviews={adv.numReviews}
        />
      ))}
    </ul>
  );
};
