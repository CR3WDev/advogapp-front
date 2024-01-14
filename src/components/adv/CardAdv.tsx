import { AdvList } from "./AdvList";
import { mockAdv } from "../../utils/mock/index";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

export const CardAdv = () => {
  const [selectedAdv, setSelectedAdv] = useState(null);
  const advType = [
    { type: "Cível" },
    { type: "Trabalhista" },
    { type: "Imobiliário" },
    { type: "Ambientalista" },
    { type: "Do consumidor" },
    { type: "Criminalista" },
    { type: "Previdenciário" },
    { type: "Digital" },
  ];

  const selectedAdvTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.type}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const advOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <div>{option.type}</div>
      </div>
    );
  };

  return (
    <div>
      <h1>Lista de Adv</h1>
      <Dropdown
        value={selectedAdv}
        onChange={(e) => setSelectedAdv(e.value)}
        options={advType}
        optionLabel="type"
        placeholder="Especialização"
        filter
        valueTemplate={selectedAdvTemplate}
        itemTemplate={advOptionTemplate}
        className="w-full md:w-14rem"
      />
      <AdvList items={mockAdv} />
    </div>
  );
};
