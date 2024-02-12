import { getFormErrorMessage } from '@utils/hooks/useGetFormErrorMessage'
import { getI18n } from '@utils/hooks/useGetI18n'
import { lawTypes } from '@utils/mock'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { classNames } from 'primereact/utils'
import { Dispatch, SetStateAction, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

type EditUserProfileProps = {
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
}
export const EditUserProfile = ({ isVisible, setIsVisible }: EditUserProfileProps) => {
  const profilei18n = getI18n('user_profile')
  const [aboutValue, setAboutValue] = useState('')
  const {
    control,
    formState: { errors },
  } = useForm()

  return (
    <Dialog
      header={profilei18n.edit_user_info}
      visible={isVisible}
      draggable={false}
      onHide={() => setIsVisible(false)}
      style={{ width: '30vw' }}
      breakpoints={{ '960px': '75vw', '641px': '100vw' }}
    >
      <div className="flex flex-column w-full mb-1">
        <label htmlFor="username" className="m-1">
          {profilei18n.user_name}:
        </label>
        <InputText id="username" aria-describedby="username-help" />
      </div>

      <div className="padding-responsiveness mb-1 flex flex-column">
        <label htmlFor="username" className="m-1">
          {profilei18n.specialization}:
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
                placeholder={profilei18n.specialization}
                className={classNames({ 'p-invalid': fieldState.error })}
              />
            </>
          )}
        />
        {getFormErrorMessage(errors.specialization)}
      </div>
      <div className="flex flex-column mb-3">
        <label className="text-left m-1">{profilei18n.about}:</label>
        <div className="p-float-label">
          <InputTextarea
            value={aboutValue}
            onChange={(e) => setAboutValue(e.target.value)}
            rows={5}
            cols={30}
            maxLength={225}
            style={{ resize: 'none', height: '100%', width: '100%' }}
          />
          <div>
            <Button
              className="w-full mt-2"
              label={profilei18n.save}
              onClick={() => setIsVisible(false)}
            />
          </div>
        </div>
      </div>
    </Dialog>
  )
}
