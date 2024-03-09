import { ErrorMessageComponent } from '@components/ErrorMessage'
import { LogoTopbarComponent } from '@components/LogoTopbar'
import { useGetHeightLessTopbar } from '@utils/hooks/useGetHeightLessTopbar'
import { getI18n } from '@utils/hooks/useGetI18n'
import { UseValidatePassword } from '@utils/hooks/useValidatePassword'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import { Password } from 'primereact/password'
import { classNames } from 'primereact/utils'
import { Controller, useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'
import { useGetParams } from '@utils/hooks/useGetParams.ts'
import { postResetPassword } from '@pages/Auth/ChangePassword/ChangePasswordService.ts'
import { showToastSuccess } from '@components/GlobalToast'

export const ChangePasswordPage = () => {
  const changePasswordI18n = getI18n('change_password')
  const navigate = useNavigate()
  const params = useGetParams()
  if (!params) return <Navigate to="/login" />

  const { mutateAsync: resetPassword } = postResetPassword()
  const passwordHeader = <div className="font-bold mb-3">{changePasswordI18n.pick_a_password}</div>
  const passwordFooter = (
    <>
      <Divider />
      <p className="mt-2">Ao menos:</p>
      <ul className="pl-2 ml-2 mt-0 line-height-3">
        <li>{changePasswordI18n.at_least_one_uppercase}</li>
        <li>{changePasswordI18n.at_least_one_numeric}</li>
        <li>{changePasswordI18n.at_least_one_special_characters}</li>
        <li>{changePasswordI18n.at_least_eight_characters}</li>
      </ul>
    </>
  )

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm()

  const onSubmit = (data: any) => {
    resetPassword({
      token: atob(params),
      password: data?.password,
    }).then(() => {
      showToastSuccess(changePasswordI18n?.changed_password)
    })
    // colocar a nova requisição aqui
    //   const request: Register = {
    //     email: data?.email,
    //     password: data?.password,
    //     fullName: data?.fullName,
    //   }
    //   userRegister(request).then(() => {
    //     navigate('/login')
    //   })
    // }
  }

  return (
    <div>
      <LogoTopbarComponent />
      <div
        style={{ minHeight: useGetHeightLessTopbar(), marginRight: '20px', marginLeft: '20px' }}
        className="flex align-items-center justify-content-center"
      >
        <div className="w-16rem">
          <div className="text-center mb-3">
            <h1>{changePasswordI18n.title}</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <Controller
                name="password"
                control={control}
                rules={{
                  required: true,
                  validate: (e) => {
                    return UseValidatePassword(e) || 'Senha Inválida'
                  },
                }}
                render={({ field, fieldState }) => (
                  <>
                    <Password
                      onChange={(e) => field.onChange(e)}
                      className={classNames({ 'p-invalid': fieldState.error })}
                      header={passwordHeader}
                      footer={passwordFooter}
                      placeholder={changePasswordI18n.password + '*'}
                      strongRegex={'^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&()_+])(?!.*\\s).{8,20}$'}
                      inputStyle={{ width: '100%' }}
                      maxLength={20}
                      toggleMask
                      promptLabel={changePasswordI18n.choose_a_password}
                      weakLabel={changePasswordI18n.too_weak}
                      mediumLabel={changePasswordI18n.average}
                      strongLabel={changePasswordI18n.strong_password}
                      id={field.name}
                      name={field.name}
                    />
                    <ErrorMessageComponent errors={errors.password} />
                  </>
                )}
              />
            </div>
            <div className=" mb-3">
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: true,
                  validate: (e: string) => {
                    return e === watch('password') || 'Senhas devem ser iguais!'
                  },
                }}
                render={({ field, fieldState }) => (
                  <div className="custom-password">
                    <Password
                      onChange={(e) => field.onChange(e)}
                      placeholder={changePasswordI18n.confirm_password + '*'}
                      className={classNames({ 'p-invalid': fieldState.error })}
                      feedback={false}
                      toggleMask
                      inputStyle={{ width: '100%' }}
                    />
                    <ErrorMessageComponent errors={errors.confirmPassword} />
                  </div>
                )}
              />
            </div>
            <div className=" mb-3">
              <Button className="w-full " label={changePasswordI18n.send} />
            </div>
          </form>

          <div className="text-center ">
            <div className="mt-2">
              <span>{changePasswordI18n.return_to}</span>
              <span
                onClick={() => {
                  navigate('/')
                }}
                className="no-underline hover:underline text-primary cursor-pointer ml-1"
              >
                {changePasswordI18n.home}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
