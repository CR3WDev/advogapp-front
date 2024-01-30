import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { classNames } from 'primereact/utils'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { showToastSuccess } from '@components/GlobalToast'
import { LogoTopbar } from '@components/LogoTopbar'
import { getFormErrorMessage } from '@utils/hooks/useGetFormErrorMessage'
import { getI18n } from '@utils/hooks/useGetI18n'
import { postLogin } from './Services'
import { Login } from './interfaces'

import '../index.scss'

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
      navigate('/')
      showToastSuccess('success')
      sessionStorage.setItem('token', data?.data?.token)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LogoTopbar />
      <div className="contentSpace authFormat">
        <div className=" w-16rem">
          <div className="text-center mb-4">
            <span className="text-3xl sm:text-4xl font-bold">{loginI18n.title}</span>
          </div>
          <div className="pl-2 pr-2 sm:p-0 mb-2">
            <InputText
              className={classNames('formTextResponsiveness', {
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
          <div className="pl-2 pr-2 sm:p-0 mb-3">
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <div className="formTextResponsiveness">
                  <Password
                    onChange={(e) => field.onChange(e)}
                    placeholder={loginI18n.password + ' <- não responsivo'}
                    className={classNames('formTextResponsiveness', {
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
          <div className="pl-2 pr-2 sm:p-0 mb-3">
            <Button className="w-full formTextResponsiveness" label={loginI18n.login} />
          </div>
          <div className="text-center">
            <div className="mb-1">
              <span
                onClick={() => {
                  navigate('/changepassword')
                }}
                className="no-underline hover:underline text-primary cursor-pointer formTextResponsiveness"
              >
                {loginI18n.reset_password}
              </span>
            </div>
            <div className="flex flex-wrap align-items-center justify-content-center p-2 formTextResponsiveness">
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
