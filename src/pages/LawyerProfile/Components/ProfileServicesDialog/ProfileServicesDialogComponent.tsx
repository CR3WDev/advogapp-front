import { queryClient } from '@services/queryClient.ts'
import { getI18n } from '@utils/hooks/useGetI18n'
import { useGetLoginResponseDTO } from '@utils/hooks/useGetLoginResponseDTO.ts'
import { userLawyerServices } from '@utils/mock/LawyerMock.tsx'
import { Button } from 'primereact/button'
import { DataView } from 'primereact/dataview'
import { Dialog } from 'primereact/dialog'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { ProfileServicesMenuComponent } from '../ProfileServicesMenu'
import { ErrorMessageComponent } from '@components/ErrorMessage'
import { putEditLawyer } from '@pages/LawyerProfile/LawyerProfileServices.ts'

type ProfileServicesDialogProps = {
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
  data: any
}
export const ProfileServicesDialogComponent = (
  {
    isVisible,
    setIsVisible,
    data,
  }: ProfileServicesDialogProps) => {
  const lawyerprofilei18n = getI18n('lawyer_profile')
  const loginResponseDTO = useGetLoginResponseDTO()

  const { mutateAsync: editLawyer } = putEditLawyer(loginResponseDTO!.lawyerId)

  const onSubmit = (data: any) => {
    editLawyer({ ...data }).then(() => {
      setIsVisible(false)
      queryClient.invalidateQueries('getLawyerInfo')
    })
  }
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: data?.fullName,
      specialization: data?.specialization,
      description: data?.description,
    },
  })

  const userLawyerServicesTemplate = (services: any) => {
    return (
      <div className="flex text-lg surface-100 card border-round-lg mx-0 my-1">
        <div className="flex flex-column">
          <div className="font-bold mb-2 text-lg">{services.title}</div>
          <div>{services.info}</div>
        </div>
        <div className="flex">
          <ProfileServicesMenuComponent />
        </div>
      </div>
    )
  }

  return (
    <Dialog
      header={lawyerprofilei18n.edit_user_services}
      visible={isVisible}
      draggable={false}
      style={{ maxWidth: '90vw', width: '1000px' }}
      onHide={() => setIsVisible(false)}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-1">
          <Button outlined label={lawyerprofilei18n.add_a_service} icon="pi pi-plus" />
        </div>
        <div className="flex flex-column w-full mb-1">
          <ErrorMessageComponent errors={errors.fullName} />
        </div>
        <DataView value={userLawyerServices} itemTemplate={userLawyerServicesTemplate} />
        <div>
          <Button
            type="submit"
            onClick={() => {
              console.log('entrou')
            }}
            className="w-full mt-2"
            label={lawyerprofilei18n.save}
          />
        </div>
      </form>
    </Dialog>
  )
}
