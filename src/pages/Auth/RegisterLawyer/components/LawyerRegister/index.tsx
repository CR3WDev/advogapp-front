import { getFormErrorMessage } from '@utils/hooks/useGetFormErrorMessage'
import { getI18n } from '@utils/hooks/useGetI18n'
import { lawTypes } from '@utils/mock'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { InputMask } from 'primereact/inputmask'
import { classNames } from 'primereact/utils'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { postRegister } from '../../services'

import { useGetUserRole } from '@utils/hooks/useGetToken'
import '../../../index.scss'
import { RegisterLawyer } from '../../interfaces'

export const LawyerRegister = () => {
  const registerI18n = getI18n('register_lawyer')
  const { mutateAsync: userRegister } = postRegister()
  const navigate = useNavigate()
  console.log(useGetUserRole())
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data: any) => {
    const request: RegisterLawyer = {
      cpf: data.cpf,
      oab: data.oab,
      specialization: data.specialization,
    }
    userRegister(request).then(() => {
      navigate('/login')
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="padding-responsiveness mb-2 flex flex-column">
        <Controller
          name="oab"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field, fieldState }) => (
            <>
              <InputMask
                id={field.name}
                name={field.name}
                value={field.value}
                className={classNames('form-text-responsiveness', {
                  'p-invalid': fieldState.error,
                })}
                onChange={(e) => {
                  field.onChange(e?.value)
                }}
                mask="aa999999"
                placeholder={registerI18n.oab + ' *'}
              />
              {getFormErrorMessage(errors.oab)}
            </>
          )}
        />
      </div>
      <div className="padding-responsiveness mb-2 flex flex-column">
        <Controller
          name="cpf"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field, fieldState }) => (
            <>
              <InputMask
                id={field.name}
                name={field.name}
                value={field.value}
                onChange={(e) => {
                  field.onChange(e.value)
                }}
                placeholder={registerI18n.cpf}
                mask="999.999.999-99"
                className={classNames({ 'p-invalid': fieldState.error })}
              />
              {getFormErrorMessage(errors.cpf)}
            </>
          )}
        />
      </div>
      <div className="padding-responsiveness mb-3 flex flex-column">
        <Controller
          name="specialization"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <>
              <Dropdown
                id={field.name}
                name={field.name}
                value={field.value}
                onChange={(e) => {
                  field.onChange(e.value)
                }}
                options={lawTypes}
                optionLabel="type"
                optionValue="code"
                placeholder={registerI18n.specialization}
                className={classNames({ 'p-invalid': fieldState.error })}
              />
            </>
          )}
        />
        {getFormErrorMessage(errors.specialization)}
      </div>
      <div className="padding-responsiveness mb-3">
        <Button className="w-full form-text-responsiveness" label={registerI18n.create_account} />
      </div>
    </form>
  )
}
