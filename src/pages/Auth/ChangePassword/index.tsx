import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { LogoTopbar } from '@components/LogoTopbar'
import { getFormErrorMessage } from '@utils/hooks/useGetFormErrorMessage'
import { getI18n } from '@utils/hooks/useGetI18n'
import { useEffect } from 'react'

import '../index.scss'

export const ChangePassowrdPage = () => {
  const changePasswordI18n = getI18n('changePassword')
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
      <LogoTopbar />
      <div className="contentSpace authFormat">
        <div className="w-16rem">
          <div className="text-center paddingResponsiveness mb-3">
            <span className="title">{changePasswordI18n.title}</span>
          </div>
          <div className="paddingResponsiveness mb-3 text-center formTextResponsiveness">
            <span>{changePasswordI18n.description}</span>
          </div>
          <div className="paddingResponsiveness mb-3">
            <InputText
              className={classNames('formTextResponsiveness', {
                'p-invalid': errors.email,
              })}
              style={{ width: '100%' }}
              placeholder={changePasswordI18n.email}
              id="login"
              {...register('email', {
                required: true,
              })}
            />
            {getFormErrorMessage(errors.email)}
          </div>
          <div className="paddingResponsiveness mb-3">
            <Button className="w-full formTextResponsiveness" label={changePasswordI18n.send} />
          </div>
          <div className="text-center formTextResponsiveness p-2 sm:p-0">
            <span
              onClick={() => {
                navigate('/login')
              }}
              className="no-underline hover:underline text-primary cursor-pointer"
            >
              {changePasswordI18n.back}
            </span>
          </div>
        </div>
      </div>
    </form>
  )
}
