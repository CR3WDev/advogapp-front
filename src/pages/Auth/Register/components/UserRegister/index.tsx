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
    <form onSubmit={handleSubmit(onSubmit)} style={{ minWidth: '500px' }}>
      <div className="mb-2">
        <InputText
          className={classNames({
            'p-invalid': errors.fullName,
          })}
          style={{ width: '100%' }}
          placeholder={registerI18n.full_name + ' *'}
          id="fullName"
          {...register('fullName', {
            required: true,
          })}
        />
        {getFormErrorMessage(errors.fullName)}
      </div>
      <div className="mb-2">
        <InputText
          className={classNames({
            'p-invalid': errors.email,
          })}
          style={{ width: '100%' }}
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
      <div className="mb-2 flex flex-column">
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <>
              <Password
                onChange={(e) => field.onChange(e)}
                placeholder={registerI18n.password}
                className={classNames({ 'p-invalid': fieldState.error })}
                feedback={false}
                toggleMask
                inputStyle={{ minWidth: '500px' }}
              />
            </>
          )}
        />
        {getFormErrorMessage(errors.password)}
      </div>
      <div className="mb-3  flex flex-column">
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
            <>
              <Password
                onChange={(e) => field.onChange(e)}
                placeholder={registerI18n.confirm_password}
                className={classNames({ 'p-invalid': fieldState.error })}
                feedback={false}
                toggleMask
                inputStyle={{ minWidth: '500px' }}
              />
              {getFormErrorMessage(errors.confirmPassword)}
            </>
          )}
        />
      </div>
      <div className="mb-3">
        <Button className="w-full" label={registerI18n.create_account} />
      </div>
    </form>
  )
}
