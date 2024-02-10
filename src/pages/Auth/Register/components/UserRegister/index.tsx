import { getFormErrorMessage } from '@utils/hooks/useGetFormErrorMessage'
import { getI18n } from '@utils/hooks/useGetI18n'
import { UseValidateEmail } from '@utils/hooks/useValidateEmail'
import { Button } from 'primereact/button'
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
      <div className="padding-responsiveness mb-2">
        <InputText
          className={classNames('', {
            'p-invalid': errors.fullName,
          })}
          placeholder={registerI18n.full_name + ' *'}
          id="fullName"
          {...register('fullName', {
            required: true,
          })}
        />
        {getFormErrorMessage(errors.fullName)}
      </div>
      <div className="padding-responsiveness mb-2">
        <InputText
          className={classNames('', {
            'p-invalid': errors.email,
          })}
          placeholder={registerI18n.email + ' *'}
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
      <div className="padding-responsiveness mb-2">
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <div className="custom-password">
              <Password
                onChange={(e) => field.onChange(e)}
                placeholder={registerI18n.password}
                className={classNames({ 'p-invalid': fieldState.error })}
                feedback={false}
                toggleMask
                inputStyle={{ width: '100%' }}
              />
            </div>
          )}
        />
        {getFormErrorMessage(errors.password)}
      </div>
      <div className="padding-responsiveness mb-3">
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
                placeholder={registerI18n.confirm_password}
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
      <div className="padding-responsiveness mb-3">
        <Button className="w-full " label={registerI18n.create_account} />
      </div>
    </form>
  )
}
