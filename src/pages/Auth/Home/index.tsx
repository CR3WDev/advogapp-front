import { Button } from "primereact/button";
import img from "../../../assets/icon.svg";
import img_men from "../../../assets/home_imj.jpg";
import { getI18n } from "../../../utils/hooks/useGetI18n";
import { Dropdown } from "primereact/dropdown";

export const HomePage = () => {
  const loginI18n = getI18n("login");

  return (
    <div className="h-screen w-screen flex flex-column">
      <header className="flex w-screen h-6rem align-items-center justify-content-between">
        <div className="flex">
          <div className="flex align-items-center">
            <img src={img} style={{ borderRadius: 5 }} className="mx-4" />
          </div>
          <div className="flex align-items-center">
            <span>Encontrar Advogados</span>
          </div>
        </div>
        <div>
          <Button
            outlined
            className="mr-4"
            label="login"
            severity="secondary"
            icon="pi pi-user"
            iconPos="right"
          ></Button>
        </div>
      </header>
      <main
        className="flex"
        style={{
          //height: "calc(100vh - 6rem)",
          overflowY: "auto",
        }}
      >
        <div
          className="flex"
          style={{ backgroundColor: "#88A9C3", overflowY: "auto" }}
        >
          <div className="flex w-screen align-items-center justify-content-evenly">
            <div>
              <div>
                <h1>
                  Sua ferramenta para <br /> a busca de advogados
                </h1>
              </div>
              <div>
                <p>
                  Procurando um Advogado? <br /> O Advogapp te ajuda a encontrar
                  o advogado para o seu caso
                </p>
              </div>
            </div>
            <div>
              <img
                src={img_men}
                style={{
                  borderRadius: 5,
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
                className="mx-4"
              />
            </div>
          </div>
        </div>
        <div
          className="flex"
          style={{
            height: "100vh",
            overflowY: "auto",
          }}
        >
          {/* <Dropdown
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.value)}
          options={countries}
          optionLabel="name"
          placeholder="Select a Country"
          filter
          valueTemplate={selectedCountryTemplate}
          itemTemplate={countryOptionTemplate}
          className="w-full md:w-14rem"
        /> */}
        </div>
      </main>
    </div>
  );
};
