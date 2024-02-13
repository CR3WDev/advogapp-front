import { getFormErrorMessage } from '@utils/hooks/useGetFormErrorMessage'
import { getI18n } from '@utils/hooks/useGetI18n'
import { UseValidateEmail } from '@utils/hooks/useValidateEmail'
import { UseValidatePassword } from '@utils/hooks/useValidatePassword'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { classNames } from 'primereact/utils'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Register } from '../../interfaces'
import { postRegister } from '../../services'

export const UserRegister = () => {
  const registerI18n = getI18n('register')
  const { mutateAsync: userRegister } = postRegister()
  const navigate = useNavigate()

  const passwordHeader = <div className="font-bold mb-3">{registerI18n.pick_a_password}</div>
  const passwordFooter = (
    <>
      <Divider />
      <p className="mt-2">Ao menos:</p>
      <ul className="pl-2 ml-2 mt-0 line-height-3">
        <li>{registerI18n.at_least_one_uppercase}</li>
        <li>{registerI18n.at_least_one_numeric}</li>
        <li>{registerI18n.at_least_one_special_characters}</li>
        <li>{registerI18n.at_least_eight_characters}</li>
      </ul>
    </>
  )

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
    register,
  } = useForm()

  const onSubmit = (data: any) => {
    const request: Register = {
      email: data?.email,
      password: data?.password,
      fullName: data?.fullName,
    }
    userRegister(request).then(() => {
      navigate('/login')
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <InputText
          className={classNames('w-full', {
            'p-invalid': errors.fullName,
          })}
          placeholder={registerI18n.full_name + '*'}
          id="fullName"
          {...register('fullName', {
            required: true,
          })}
        />
        {getFormErrorMessage(errors.fullName)}
      </div>
      <div className="mb-2">
        <InputText
          className={classNames('w-full', {
            'p-invalid': errors.email,
          })}
          placeholder={registerI18n.email + '*'}
          id="email"
          {...register('email', {
            required: true,
            validate: (e) => {
              return UseValidateEmail(e) || 'Email Inválido'
            },
          })}
        />
        {getFormErrorMessage(errors.email)}
      </div>
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
                placeholder={registerI18n.password + '*'}
                strongRegex={'^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&()_+])(?!.*\\s).{8,20}$'}
                inputStyle={{ width: '100%' }}
                maxLength={20}
                toggleMask
                promptLabel={registerI18n.choose_a_password}
                weakLabel={registerI18n.too_weak}
                mediumLabel={registerI18n.average}
                strongLabel={registerI18n.strong_password}
                id={field.name}
                name={field.name}
              />
              {getFormErrorMessage(errors.password)}
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
                placeholder={registerI18n.confirm_password + '*'}
                className={classNames({ 'p-invalid': fieldState.error })}
                feedback={false}
                toggleMask
                inputStyle={{ width: '100%' }}
              />
              {getFormErrorMessage(errors.confirmPassword)}
            </div>
          )}
        />
      </div>
      <div className=" mb-3">
        <Button className="w-full " label={registerI18n.create_account} />
      </div>
    </form>
  )
}
