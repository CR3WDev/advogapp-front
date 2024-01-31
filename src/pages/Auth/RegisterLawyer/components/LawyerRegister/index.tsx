import { getFormErrorMessage } from '@utils/hooks/useGetFormErrorMessage'
import { getI18n } from '@utils/hooks/useGetI18n'
import { lawTypes } from '@utils/mock'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { InputMask } from 'primereact/inputmask'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Register } from '../../interfaces'
import { postRegister } from '../../services'

export const LawyerRegister = () => {
  const registerI18n = getI18n('register_lawyer')
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
      id: '0',
      cpf: data.cpf,
      dateBirth: data.dataBirth,
      oab: data.oab,
      specialization: data.specialization,
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
            'p-invalid': errors.oab,
          })}
          style={{ width: '100%' }}
          placeholder={registerI18n.oab + ' *'}
          id="oab"
          {...register('oab', {
            required: true,
          })}
        />
        {getFormErrorMessage(errors.oab)}
      </div>
      <div className="mb-2  flex flex-column">
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
      <div className="mb-2  flex flex-column">
        <Controller
          name="dateBirth"
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
                placeholder={registerI18n.date_birth}
                mask="99/99/9999"
                className={classNames({ 'p-invalid': fieldState.error })}
              />
              {getFormErrorMessage(errors.dateBirth)}
            </>
          )}
        />
      </div>
      <div className="mb-3 flex flex-column">
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
                optionValue="type"
                placeholder={registerI18n.specialization}
                className={classNames({ 'p-invalid': fieldState.error })}
              />
            </>
          )}
        />
        {getFormErrorMessage(errors.specialization)}
      </div>
      <div className="mb-3">
        <Button className="w-full" label={registerI18n.create_account} />
      </div>
    </form>
  )
}
