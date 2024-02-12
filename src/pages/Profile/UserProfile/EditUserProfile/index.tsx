import { getI18n } from '@utils/hooks/useGetI18n'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'

type EditUserProfileProps = {
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
}
export const EditUserProfile = ({ isVisible, setIsVisible }: EditUserProfileProps) => {
  const profilei18n = getI18n('user_profile')
  const [aboutValue, setAboutValue] = useState('')
  const {
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

      <div className="flex flex-column">
        <div>
          <Button
            className="w-full mt-2"
            label={profilei18n.save}
            onClick={() => setIsVisible(false)}
          />
        </div>
      </div>
    </Dialog>
  )
}
