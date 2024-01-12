import { AdvList } from "./advList";
import { mockAdv } from "../../utils/mock/index";

export const CardAdv = () => {
  return (
    <div>
      <h1>Lista de Adv</h1>
      //Filtro
      <AdvList items={mockAdv} />
    </div>
  );
};
