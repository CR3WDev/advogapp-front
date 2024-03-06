import { LogoTopbarComponent } from '@components/LogoTopbar'
import { ToggleMenuComponent } from '@components/ToggleMenu'
import { ProfileDialogComponent } from '@pages/LawyerProfile/Components/ProfileDialog'
import { ProfileServicesDialogComponent } from '@pages/LawyerProfile/Components/ProfileServicesDialog'
import { getLawyerInfo } from '@pages/LawyerProfile/LawyerProfileServices.ts'
import { useGetHeightLessTopbar } from '@utils/hooks/useGetHeightLessTopbar.ts'
import { getI18n } from '@utils/hooks/useGetI18n'
import { useGetIdByURL } from '@utils/hooks/useGetIdByURL'
import { useGetLoginResponseDTO } from '@utils/hooks/useGetLoginResponseDTO'
import { useGetUserInfo } from '@utils/hooks/useGetUserInfo'
import { userLawyerServices } from '@utils/mock/LawyerMock.tsx'
import { Avatar } from 'primereact/avatar'
import { Button } from 'primereact/button'
import { DataView } from 'primereact/dataview'
import { Divider } from 'primereact/divider'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const LawyerProfilePage = () => {
  const navigate = useNavigate()
  const lawyerProfileI18n = getI18n('lawyer_profile')
  const [showEditLawyerInfoDialog, setShowEditLawyerInfoDialog] = useState(false)
  const [showEditLawyerServicesDialog, setShowEditLawyerServicesDialog] = useState(false)
  const { handleSubmit } = useForm()
  const lawyerId = useGetIdByURL('lawyer/')
  const tokenUserId = useGetUserInfo('userId')
  const { data: lawyerInfo } = getLawyerInfo(lawyerId || '')
  const loginResponseDTO = useGetLoginResponseDTO()
  const isLawyer = loginResponseDTO?.role ? loginResponseDTO.role === 'lawyer' : false

  const isViewMode = (): boolean => {
    if (!tokenUserId) {
      return true
    }
    if (!lawyerInfo?.data?.LawyerResponseByIdDTO.userId) {
      return true
    }
    if (tokenUserId !== lawyerInfo?.data?.LawyerResponseByIdDTO.userId) {
      return true
    }
    if (!tokenUserId) return true
    if (!lawyerInfo?.data?.LawyerResponseByIdDTO) return true
    if (tokenUserId !== lawyerInfo?.data?.LawyerResponseByIdDTO?.userId) return true
    return false
  }

  const left = () => {
    return (
      <div className=" ml-3">
        <span className="hidden md:flex">{lawyerProfileI18n.find_lawyers}</span>
      </div>
    )
  }
  const right = () => {
    return (
      <div className="flex align-items-center">
        {!isLawyer && (
          <div>
            <Button
              outlined
              text
              onClick={() => {
                navigate('/register/lawyer')
              }}
              label={lawyerProfileI18n.become_one_of_lawyers}
              className="mr-2"
            ></Button>
          </div>
        )}
        <div className="flex">
          <ToggleMenuComponent />
        </div>
      </div>
    )
  }

  const onSubmit = () => {
    // setFormData(data)
  }

  const userLawyerServicesTemplate = (services: any) => {
    return (
      <div className="flex flex-column text-lg surface-100 card border-round-lg mx-0 my-1">
        <div className="font-bold mb-2 text-lg">{services.title}</div>
        <div>{services.info}</div>
      </div>
    )
  }

  return (
    <div className="surface-100">
      {showEditLawyerInfoDialog && (
        <ProfileDialogComponent
          isVisible={showEditLawyerInfoDialog}
          setIsVisible={setShowEditLawyerInfoDialog}
          data={lawyerInfo?.data?.LawyerResponseByIdDTO}
        />
      )}
      {showEditLawyerServicesDialog && (
        <ProfileServicesDialogComponent
          isVisible={showEditLawyerServicesDialog}
          setIsVisible={setShowEditLawyerServicesDialog}
          data={lawyerInfo?.data?.LawyerResponseByIdDTO}
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white">
          <LogoTopbarComponent leftContent={left} rightContent={right} />
        </div>
        <div
          style={{ minHeight: useGetHeightLessTopbar(), marginRight: '20px', marginLeft: '20px' }}
          className="flex justify-content-center mt-7"
        >
          <div className="w-8 bg-white border-round-lg p-6">
            <div className="flex justify-content-between mb-5">
              <div className="flex">
                <div className="mr-4">
                  <Avatar
                    icon="pi pi-user"
                    size="xlarge"
                    className="text-2xl"
                    style={{ width: '9rem', height: '9rem' }}
                  />
                </div>
                <div className="flex flex-column">
                  <span className="text-4xl font-semibold">
                    {lawyerInfo?.data?.LawyerResponseByIdDTO.fullName || ' '}
                  </span>
                  <div className="flex mt-2">
                    <span className="text-lg text-400 mr-2">
                      {lawyerProfileI18n.specialization}
                    </span>
                    <span className="text-lg">
                      {lawyerInfo?.data?.LawyerResponseByIdDTO.specialization || ' '}
                    </span>
                  </div>
                  <div className="flex mt-1">
                    <span className="text-lg text-400 mr-2">{lawyerProfileI18n.oab}:</span>
                    <span className="text-lg">
                      {lawyerInfo?.data?.LawyerResponseByIdDTO.oab || ' '}
                    </span>
                  </div>
                  <div className="flex mt-1">
                    <span className="text-lg text-400 mr-2">{lawyerProfileI18n.email}:</span>
                    <span className="text-lg">emailDoMano@gmail.com</span>
                  </div>
                </div>
              </div>
              <div>
                <div className={`${isViewMode() ? 'block' : 'hidden'}`}>
                  <Button label={lawyerProfileI18n.chat} icon="pi pi-comments" />
                </div>
                <div className={`${isViewMode() ? 'hidden' : 'block'}`}>
                  <span
                    className="text-xl pi pi-pencil mr-1"
                    style={{ cursor: 'pointer' }}
                    onClick={() => !isViewMode() && setShowEditLawyerInfoDialog(true)}
                  />
                </div>
              </div>
            </div>
            {/* <Divider className="my-5" /> */}
            <div className="flex">
              <div className="flex flex-column w-8">
                <span className="text-xl font-bold mb-2">{lawyerProfileI18n.about}</span>
                <span className="text-xl mr-3">
                  {lawyerInfo?.data?.LawyerResponseByIdDTO.description || ' '}
                </span>
              </div>
            </div>
            <Divider className="my-5" />
            <>
              <div className="mb-2 flex justify-content-between">
                <span className="text-xl font-bold">{lawyerProfileI18n.services}</span>
                <div className={`${isViewMode() ? 'hidden' : 'block'}`}>
                  <span
                    className="text-xl pi pi-pencil mr-1"
                    style={{ cursor: 'pointer' }}
                    onClick={() => !isViewMode() && setShowEditLawyerServicesDialog(true)}
                  />
                </div>
              </div>
              <DataView value={userLawyerServices} itemTemplate={userLawyerServicesTemplate} />
            </>
          </div>
        </div>
      </form>
    </div>
  )
}
