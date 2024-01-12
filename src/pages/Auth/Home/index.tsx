import { Button } from "primereact/button";
import img from "../../../assets/icon.svg";
import img_men from "../../../assets/home_imj.jpg";
import { getI18n } from "../../../utils/hooks/useGetI18n";
import { Dropdown } from "primereact/dropdown";

export const HomePage = () => {
  const loginI18n = getI18n("login");

  return (
    <div className="">
      <header className="flex h-6rem align-items-center justify-content-between">
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
        className="flex flex-column"
        style={{
          height: "calc(200vh - 6rem)",
          overflowY: "auto",
        }}
      >
        <div
          className="flex"
          style={{
            height: "calc(100vh - 6rem)",
            backgroundColor: "#88A9C3",
            overflowY: "auto",
          }}
        >
          <div className="flex w-screen align-items-center justify-content-evenly">
            <div className="mx-4">
              <div>
                <h1>
                  Sua ferramenta para <br /> a busca de advogados
                </h1>
              </div>
              <div>
                <span>
                  Procurando um Advogado? <br /> O Advogapp te ajuda a encontrar
                  o advogado para o seu caso
                </span>
              </div>
            </div>
            <div className="mx-8">
              <img src={img_men} style={{ borderRadius: 5 }} className="mx-4" />
            </div>
          </div>
        </div>
        <div
          className="flex m-8"
          style={{
            height: "100vh",
            overflowY: "auto",
            backgroundColor: "#ffffff",
          }}
        >
          <span>aaa</span>
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
