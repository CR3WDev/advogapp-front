import { queryClient } from '@services/queryClient'
import { getFormErrorMessage } from '@utils/hooks/useGetFormErrorMessage'
import { getI18n } from '@utils/hooks/useGetI18n'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { postUpdateUser } from '../service'

type EditUserProfileProps = {
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
  formData: any
}
export const EditUserProfile = ({ isVisible, setIsVisible, formData }: EditUserProfileProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const profilei18n = getI18n('user_profile')
  const { mutateAsync: updateUser } = postUpdateUser()

  const onSubmit = (data: any) => {
    updateUser(
      {
        id: formData.id,
        fullName: data.fullName,
      },
      {
        onSuccess: () => {
          setIsVisible(false)
          queryClient.invalidateQueries('getUserInfo')
        },
      }
    )
  }
  return (
    <Dialog
      header={profilei18n.edit_user_info}
      visible={isVisible}
      draggable={false}
      onHide={() => setIsVisible(false)}
      style={{ width: '30vw' }}
      breakpoints={{ '960px': '75vw', '641px': '100vw' }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-column w-full mb-1">
          <label htmlFor="username" className="m-1">
            {profilei18n.user_name}:
          </label>
          <InputText
            className={classNames('', {
              'p-invalid': errors.fullName,
            })}
            style={{ width: '100%' }}
            id="fullName"
            {...register('fullName', {
              required: true,
            })}
          />
          {getFormErrorMessage(errors.fullName)}
        </div>

        <div className="flex flex-column">
          <div>
            <Button className="w-full mt-2" label={profilei18n.save} />
          </div>
        </div>
      </form>
    </Dialog>
  )
}
