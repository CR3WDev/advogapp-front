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
            id={adv.id}
            name={adv.name}
            specialization={adv.specialization}
            rating={adv.rating}
            numReviews={adv.numReviews}
            about={adv.about}
          />
        </li>
      ))}
    </ul>
  );
};
