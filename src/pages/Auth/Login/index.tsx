import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { classNames } from 'primereact/utils'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { LogoTopbar } from '@components/LogoTopbar'
import { getFormErrorMessage } from '@utils/hooks/useGetFormErrorMessage'
import { useGetHeightLessTopbar } from '@utils/hooks/useGetHeightLessTopbar'
import { getI18n } from '@utils/hooks/useGetI18n'
import { postLogin } from './Services'
import { Login } from './interfaces'

export const LoginPage = () => {
  const loginI18n = getI18n('login')
  const navigate = useNavigate()
  const { mutateAsync: login } = postLogin()
  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
    register,
  } = useForm()

  useEffect(() => {
    watch('value')
  }, [watch('value')])

  const onSubmit = (data: any) => {
    const request: Login = {
      login: data?.login,
      password: data.password,
    }
    login(request).then((data: any) => {
      navigate('/home')
      const LoginResponseDTO = JSON.stringify(data?.data?.LoginResponseDTO)
      sessionStorage.setItem('LoginResponseDTO', LoginResponseDTO)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LogoTopbar />
      <div
        style={{ minHeight: useGetHeightLessTopbar(), marginRight: '20px', marginLeft: '20px' }}
        className="flex align-items-center justify-content-center"
      >
        <div className="w-16rem">
          <div className="text-center">
            <h1>{loginI18n.title}</h1>
          </div>
          <div className="mb-2">
            <InputText
              className={classNames('w-full', {
                'p-invalid': errors.login,
              })}
              placeholder={loginI18n.login}
              id="login"
              {...register('login', {
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
                <div>
                  <Password
                    onChange={(e) => field.onChange(e)}
                    placeholder={loginI18n.password}
                    className={classNames({
                      'p-invalid': fieldState.error,
                    })}
                    feedback={false}
                    toggleMask
                    inputStyle={{ width: '100%' }}
                  />
                  {getFormErrorMessage(errors.password)}
                </div>
              )}
            />
          </div>
          <div className="mb-3">
            <Button className="w-full" label={loginI18n.login} />
          </div>
          <div className="text-center">
            <div className="mb-1">
              <span
                onClick={() => {
                  navigate('/changepassword')
                }}
                className="no-underline hover:underline text-primary cursor-pointer"
              >
                {loginI18n.reset_password}
              </span>
            </div>
            <div className="flex flex-wrap align-items-center justify-content-center p-2">
              <span>{loginI18n.no_account}</span>
              <span
                onClick={() => {
                  navigate('/register')
                }}
                className="no-underline hover:underline text-primary cursor-pointer ml-1"
              >
                {loginI18n.register}
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
