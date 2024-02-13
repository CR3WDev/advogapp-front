import { getFormErrorMessage } from '@utils/hooks/useGetFormErrorMessage'
import { getI18n } from '@utils/hooks/useGetI18n'
import { lawTypes } from '@utils/mock'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { classNames } from 'primereact/utils'
import { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'

type EditLawyerProfileProps = {
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
  data: any
}
export const EditLawyerProfile = ({ isVisible, setIsVisible, data }: EditLawyerProfileProps) => {
  const lawyerprofilei18n = getI18n('lawyer_profile')

  const {
    control,
    register,
    formState: { errors },
  } = useForm({ defaultValues: data })
  return (
    <Dialog
      header={lawyerprofilei18n.edit_user_info}
      visible={isVisible}
      draggable={false}
      style={{ maxWidth: '90vw', width: '500px' }}
      onHide={() => setIsVisible(false)}
    >
      <form>
        <div className="flex flex-column w-full mb-1">
          <label htmlFor="username" className="m-1">
            {lawyerprofilei18n.user_name}:
          </label>
          <InputText
            id="fullName"
            {...register('fullName', {
              required: true,
            })}
          />
        </div>
        <div className="mb-1 flex flex-column">
          <label htmlFor="username" className="m-1">
            {lawyerprofilei18n.specialization}:
          </label>
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
                  placeholder={lawyerprofilei18n.specialization}
                  className={classNames({ 'p-invalid': fieldState.error })}
                />
              </>
            )}
          />
          {getFormErrorMessage(errors.specialization)}
        </div>
        <div className="flex flex-column mb-3">
          <label className="text-left m-1">{lawyerprofilei18n.about}:</label>
          <div className="p-float-label">
            <Controller
              name="description"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <InputTextarea
                  name={field.name}
                  id={field.name}
                  rows={5}
                  cols={30}
                  maxLength={225}
                  style={{ resize: 'none', height: '100%', width: '100%' }}
                />
              )}
            />
          </div>
        </div>
        <div>
          <Button
            className="w-full mt-2"
            label={lawyerprofilei18n.save}
            onClick={() => setIsVisible(false)}
          />
        </div>
      </form>
    </Dialog>
  )
}
