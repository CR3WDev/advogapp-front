import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useGetHeightLessTopbar } from '@utils/hooks/useGetHeightLessTopbar.ts'
import { getI18n } from '@utils/hooks/useGetI18n'
import { useEffect } from 'react'
import { LogoTopbarComponent } from '@components/LogoTopbar'
import { ErrorMessageComponent } from '@components/ErrorMessage'

export const ForgotPasswordPage = () => {
  const forgotPasswordI18n = getI18n('change_password')
  const navigate = useNavigate()
  const {
    formState: { errors },
    handleSubmit,
    watch,
    register,
  } = useForm()

  useEffect(() => {
    watch('value')
  }, [watch('value')])

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LogoTopbarComponent />
      <div
        style={{ height: useGetHeightLessTopbar() }}
        className="flex align-items-center justify-content-center"
      >
        <div className="w-16rem">
          <div className="text-center mb-3">
            <h1>{forgotPasswordI18n.title}</h1>
          </div>
          <div className=" mb-3 text-center">
            <span>{forgotPasswordI18n.description}</span>
          </div>
          <div className=" mb-3">
            <InputText
              className={classNames('', {
                'p-invalid': errors.email,
              })}
              style={{ width: '100%' }}
              placeholder={forgotPasswordI18n.email}
              id="login"
              {...register('email', {
                required: true,
              })}
            />
            <ErrorMessageComponent errors={errors.email} />
          </div>
          <div className=" mb-3">
            <Button className="w-full " label={forgotPasswordI18n.send} />
          </div>
          <div className="text-center  p-2 sm:p-0">
            <span
              onClick={() => {
                navigate('/login')
              }}
              className="no-underline hover:underline text-primary cursor-pointer"
            >
              {forgotPasswordI18n.back}
            </span>
          </div>
        </div>
      </div>
    </form>
  )
}
