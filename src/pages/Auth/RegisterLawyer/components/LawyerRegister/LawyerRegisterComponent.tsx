import { getI18n } from '@utils/hooks/useGetI18n'
import { lawTypes } from '@utils/mock/LawyerMock.tsx'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { InputMask } from 'primereact/inputmask'
import { classNames } from 'primereact/utils'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { postRegister } from '../../RegisterServices.ts'

import { showToastSuccess } from '@components/GlobalToast'
import { useValidateCpfs } from '@utils/hooks/useValidateCpf'
import { RegisterLawyer } from '../../RegisterLawyerInterfaces.ts'
import {
  useGetLoginResponseDTO,
  useSetLoginResponseDTO,
} from '@utils/hooks/useGetLoginResponseDTO.ts'
import { ErrorMessageComponent } from '@components/ErrorMessage'

export const LawyerRegisterComponent = () => {
  const registerI18n = getI18n('register_lawyer')
  const { mutateAsync: userRegister } = postRegister()
  const navigate = useNavigate()
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
    clearErrors,
  } = useForm()

  const onSubmit = (data: any) => {
    const request: RegisterLawyer = {
      cpf: data.cpf,
      oab: data.oab,
      specialization: data.specialization,
    }
    userRegister(request).then((data) => {
      const lawyerResponseDTO = data?.data?.LawyerResponseDTO
      let loginResponseDTO = useGetLoginResponseDTO()
      if (!lawyerResponseDTO || !loginResponseDTO) return
      loginResponseDTO!.lawyerId = lawyerResponseDTO.id
      loginResponseDTO!.role = 'lawyer'
      useSetLoginResponseDTO(loginResponseDTO)
      navigate('/home')
      showToastSuccess('success')
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
                className={classNames('', {
                  'p-invalid': fieldState.error,
                })}
                onChange={(e) => {
                  field.onChange(e?.value)
                }}
                mask="aa9999?99"
                placeholder={registerI18n.oab + ' *'}
              />
              <ErrorMessageComponent errors={errors.oab} />
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
            validate: (value) => useValidateCpfs(value) || registerI18n.invalid_cpf,
          }}
          render={({ field, fieldState }) => (
            <>
              <InputMask
                id={field.name}
                name={field.name}
                value={field.value}
                onChange={(e) => {
                  field.onChange(e.value)
                  const isValidCpf = useValidateCpfs(e.value)
                  if (!isValidCpf) {
                    setError('cpf', {
                      type: 'manual',
                      message: registerI18n.invalid_cpf,
                    })
                  } else {
                    clearErrors('cpf')
                  }
                }}
                onBlur={() => {
                  field.onBlur()
                }}
                placeholder={registerI18n.cpf}
                mask="999.999.999-99"
                className={classNames({ 'p-invalid': fieldState.error })}
              />
              <ErrorMessageComponent errors={errors.cpf} />
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
        <ErrorMessageComponent errors={errors.specialization} />
      </div>
      <div className="padding-responsiveness mb-3">
        <Button className="w-full " label={registerI18n.create_account} />
      </div>
    </form>
  )
}
