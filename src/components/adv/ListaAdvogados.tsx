import { AdvItem } from "./ItemAdvogado";

export const AdvList = (props: { items: any[] }) => {
  if (props.items.length === 0) {
    return <h4>Nenhum advogado encontrado.</h4>;
  }

  return (
    <ul className="p-0">
      {props.items.map((adv) => (
        <li key={adv.id}>
          <AdvItem
            nome={adv.nome}
            especializacao={adv.especializacao}
            nota={adv.nota}
            numReviews={adv.numReviews}
            sobre={adv.sobre}
          />
        </li>
      ))}
    </ul>
  );
};
