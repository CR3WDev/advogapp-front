import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useState } from "react";
import img from "../../../assets/icon.svg";
import { getI18n } from "../../../utils/hooks/useGetI18n";

export const LoginPage = () => {
  const loginI18n = getI18n("login");
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");

  //TODO: Trocar o import para um atalho no tsconfig.json
  return (
    <div>
      <div className="absolute" style={{ top: 20, left: 20 }}>
        <img src={img} alt="" style={{ borderRadius: 5, overflow: "hidden" }} />
      </div>
      <div className="h-screen w-screen flex justify-content-center align-items-center">
        <div className="flex flex-column w-16rem">
          <div className="text-center">
            <h1>{loginI18n.title}</h1>
          </div>
          <div className="mb-4">
            <InputText
              className="w-full"
              value={value}
              placeholder={loginI18n.login}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={loginI18n.password}
              toggleMask
              inputStyle={{ width: "100%" }}
              feedback={false}
            />
          </div>
          <div className="mb-6">
            <Button className="w-full" label={loginI18n.login} />
          </div>
          <div className="text-center mb-3">
            <div>
              <a
                href="/register"
                className="no-underline hover:underline text-primary cursor-pointer ml-2"
              >
                {loginI18n.reset_password}
              </a>
            </div>
            <div className="mb-3">
              <span>{loginI18n.no_account}</span>
              <a
                href="/changePassword"
                className="no-underline hover:underline text-primary cursor-pointer ml-2"
              >
                {loginI18n.register}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
