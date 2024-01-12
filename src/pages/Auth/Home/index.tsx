import { Button } from "primereact/button";
import img from "../../../assets/icon.svg";
import { getI18n } from "../../../utils/hooks/useGetI18n";

export const HomePage = () => {
  const loginI18n = getI18n("login");

  return (
    <body className={"h-screen w-screen flex flex-column"}>
      <header className={"flex w-screen h-6rem align-items-center"}>
        <div className={"flex-column w-6rem"}>
          <img src={img} style={{ borderRadius: 5 }} className={"mx-auto"} />
        </div>
        <div className={"flex-column w-16rem"}>Encontrar Advogados</div>
        <div className={"flex-column w-16rem justify-content-end"}>Login</div>
      </header>
      <main className={"flex"}>aaa</main>
    </body>
  );
};
