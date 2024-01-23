import { getFormErrorMessage } from '@utils/hooks/useGetFormErrorMessage'
import { getI18n } from '@utils/hooks/useGetI18n'
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
    register,
  } = useForm()

  const onSubmit = (data: any) => {
    const request: Register = {
      login: data.login,
      password: data.password,
    }
    userRegister(request).then(() => {
      navigate('/login')
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <InputText
          className={classNames({
            'p-invalid': errors.login,
          })}
          style={{ width: '100%' }}
          placeholder={registerI18n.login}
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
            <>
              <Password
                onChange={(e) => field.onChange(e)}
                placeholder={registerI18n.password}
                className={classNames({ 'p-invalid': fieldState.error })}
                feedback={false}
                toggleMask
                inputStyle={{ width: '100%' }}
              />
              {getFormErrorMessage(errors.password)}
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
