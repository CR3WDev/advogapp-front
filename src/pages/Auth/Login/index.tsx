import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  showToastError,
  showToastSuccess,
} from "../../../components/GlobalToast";
import { LogoTopbar } from "../../../components/LogoTopbar";
import { api } from "../../../services/axios";
import { getFormErrorMessage } from "../../../utils/hooks/useGetFormErrorMessage";
import { getI18n } from "../../../utils/hooks/useGetI18n";

export const LoginPage = () => {
  const loginI18n = getI18n("login");
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
    register,
  } = useForm();

  useEffect(() => {
    watch("value");
  }, [watch("value")]);

  const onSubmit = (data: any) => {
    api
      .post("/auth/login", {
        login: data.login,
        password: data.password,
      })
      .then(() => {
        navigate("/");
        showToastSuccess("success");
      })
      .catch(() => {
        showToastError("Usuário ou Senha Inválidos");
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LogoTopbar />
      <div className="h-screen w-screen flex justify-content-center align-items-center">
        <div className="flex flex-column w-16rem">
          <div className="text-center mb-2">
            <h1>{loginI18n.title}</h1>
          </div>
          <div className="mb-2">
            <InputText
              className={classNames({
                "p-invalid": errors.login,
              })}
              style={{ width: "100%" }}
              placeholder={loginI18n.login}
              id="login"
              {...register("login", {
                required: true,
              })}
            />
            {getFormErrorMessage(errors.login)}
          </div>
          <div className="mb-3">
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <>
                  <Password
                    onChange={(e) => field.onChange(e)}
                    placeholder={loginI18n.password}
                    className={classNames({
                      "p-invalid": fieldState.error,
                    })}
                    feedback={false}
                    toggleMask
                    inputStyle={{ width: "100%" }}
                  />
                  {getFormErrorMessage(errors.password)}
                </>
              )}
            />
          </div>
          <div className="mb-3">
            <Button className="w-full" label={loginI18n.login} />
          </div>
          <div className="text-center mb-3">
            <div className="mb-1">
              <span
                onClick={() => {
                  navigate("/changepassword");
                }}
                className="no-underline hover:underline text-primary cursor-pointer"
              >
                {loginI18n.reset_password}
              </span>
            </div>
            <div>
              <span>{loginI18n.no_account}</span>
              <span
                onClick={() => {
                  navigate("/register");
                }}
                className="no-underline hover:underline text-primary cursor-pointer ml-2"
              >
                {loginI18n.register}
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
