import img_men from "@assets/home_imj.jpg";
import img from "@assets/icon.svg";
import { CardAdv } from "@components/adv/CardAdvogados";
import PaginationAdvogados from "@components/adv/PaginationAdvogados";
import { getI18n } from "@utils/hooks/useGetI18n";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const homeI18n = getI18n("home");
  return (
    <div>
      <header className="flex h-5rem align-items-center justify-content-between">
        <div className="flex">
          <div className="flex align-items-center">
            <img src={img} style={{ borderRadius: 5 }} className="mx-4" />
          </div>
          <div className="flex align-items-center">
            <span>{homeI18n.findLawyers}</span>
          </div>
        </div>
        <div>
          <Button
            outlined
            className="mr-4"
            label={homeI18n.logout}
            severity="secondary"
            icon="pi pi-user"
            onClick={() => {
              navigate("/");
              sessionStorage.clear();
            }}
            iconPos="right"
          ></Button>
        </div>
      </header>
      <main
        className="flex flex-column"
        style={{
          height: "calc(200vh - 5rem)",
          overflowY: "auto",
        }}
      >
        <div
          className="flex"
          style={{
            height: "100vh",
            backgroundColor: "#ffffff",
            overflowY: "auto",
            // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex flex-column-reverse md:flex-row w-screen align-items-center justify-content-evenly">
            <div className="mx-4">
              <div>
                <h1>{homeI18n.yourToolForSearchingForLawyers}</h1>
              </div>
              <div>
                <span>
                  {homeI18n.lookingForALawyer} <br />
                  {homeI18n.AdvogappHelpsYouFindTheLawyerForYourCase}
                </span>
              </div>
            </div>
            <div className="mx-8">
              <img
                src={img_men}
                style={{
                  borderRadius: 5,
                  width: "40vw",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
                className="mx-4"
              />
            </div>
          </div>
        </div>
        <div
          className="flex flex-column m-8"
          style={{
            height: "100vh",
            overflowY: "auto",
            backgroundColor: "#ffffff",
          }}
        >
          <Divider />
          <CardAdv />
          {/* <PaginationAdvogados /> */}
        </div>
      </main>
    </div>
  );
};
