import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import img from "../../../assets/icon.svg";
import { getI18n } from "../../../utils/hooks/useGetI18n";

export const ChangePassowrdPage = () => {
  const changePasswordI18n = getI18n("changePassword");
  const [value, setValue] = useState("");

  //TODO: Trocar o import para um atalho no tsconfig.json
  return (
    <div>
      <div className="absolute" style={{ top: 20, left: 20 }}>
        <img src={img} alt="" style={{ borderRadius: 5, overflow: "hidden" }} />
      </div>
      <div className="h-screen w-screen flex justify-content-center align-items-center">
        <div className="flex flex-column w-16rem">
          <div className="text-center">
            <h1>{changePasswordI18n.title}</h1>
          </div>
          <div className="mb-3">
            <InputText
              className="w-full"
              value={value}
              placeholder={changePasswordI18n.email}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <Button
              className="w-full"
              label={changePasswordI18n.changePassword}
            />
          </div>
          <div className="text-center mt-3">
            <div className="mt-3">
              <a className="no-underline hover:underline text-primary cursor-pointer ml-2">
                {changePasswordI18n.cancel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
