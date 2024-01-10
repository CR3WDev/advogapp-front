import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { classNames } from "primereact/utils";

import { getI18n } from "../../../utils/hooks/useGetI18n";
import { LogoTopbar } from "../../../components/LogoTopbar";
import { getFormErrorMessage } from "../../../utils/hooks/useGetFormErrorMessage";
import { useEffect } from "react";

export const ChangePassowrdPage = () => {
  const changePasswordI18n = getI18n("changePassword");
  const navigate = useNavigate();
  const {
    formState: { errors },
    handleSubmit,
    watch,
    register,
  } = useForm();

  useEffect(() => {
    watch("value");
  }, [watch("value")]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LogoTopbar />
      <div className="h-screen w-screen flex justify-content-center align-items-center">
        <div className="flex flex-column w-16rem">
          <div className="text-center mb-3">
            <h1 className="mb-3">{changePasswordI18n.title}</h1>
            <span>{changePasswordI18n.description}</span>
          </div>
          <div className="mb-3">
            <InputText
              className={classNames({
                "p-invalid": errors.email,
              })}
              style={{ width: "100%" }}
              placeholder={changePasswordI18n.email}
              id="login"
              {...register("email", {
                required: true,
              })}
            />
            {getFormErrorMessage(errors.email)}
          </div>
          <div className="mb-3">
            <Button className="w-full" label={changePasswordI18n.send} />
          </div>
          <div className="text-center">
            <span
              onClick={() => {
                navigate("/");
              }}
              className="no-underline hover:underline text-primary cursor-pointer ml-2"
            >
              {changePasswordI18n.back}
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};
