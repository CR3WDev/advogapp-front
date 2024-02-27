import { LogoTopbar } from '@components/LogoTopbar'
import ToggleMenu from '@components/ToggleMenu'
import { EditLawyerProfile } from '@pages/Profile/LawyerProfile/EditLawyerProfile'
import { getLawyerInfo } from '@pages/Profile/LawyerProfile/service'
import { useGetHeightLessTopbar } from '@utils/hooks/useGetHeightLessTopbar.ts'
import { getI18n } from '@utils/hooks/useGetI18n'
import { useGetIdByURL } from '@utils/hooks/useGetIdByURL'
import { useGetLoginResponseDTO } from '@utils/hooks/useGetLoginResponseDTO'
import { useGetUserInfo } from '@utils/hooks/useGetUserInfo'
import { Avatar } from 'primereact/avatar'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const LawyerProfilePage = () => {
  const navigate = useNavigate()
  const lawyerprofilei18n = getI18n('lawyer_profile')
  const [showEditDialog, setShowEditDialog] = useState(false)
  const { handleSubmit } = useForm()
  const lawyerId = useGetIdByURL('lawyer/')
  const tokenUserId = useGetUserInfo('userId')
  const { data: lawyerInfo } = getLawyerInfo(lawyerId || '')
  const loginResponseDTO = useGetLoginResponseDTO()
  const isLawyer = loginResponseDTO?.role ? loginResponseDTO.role === 'lawyer' : false

  const isViewMode = (): boolean => {
    if (!tokenUserId) {
      console.log(tokenUserId)
      return true
    }
    if (!lawyerInfo?.data?.LawyerResponseByIdDTO) {
      console.log('bbb')
      return true
    }
    if (tokenUserId !== lawyerInfo?.data?.LawyerResponseByIdDTO) {
      console.log('ccc')
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
        <span className="hidden md:flex">{lawyerprofilei18n.find_lawyers}</span>
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
              label={lawyerprofilei18n.become_one_of_lawyers}
              className="mr-2"
            ></Button>
          </div>
        )}
        <div className="flex">
          <ToggleMenu />
        </div>
      </div>
    )
  }

  const onSubmit = () => {
    // setFormData(data)
  }

  return (
    <div className="surface-100">
      <EditLawyerProfile
        isVisible={showEditDialog}
        setIsVisible={setShowEditDialog}
        data={lawyerInfo?.data}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white pb-3">
          <LogoTopbar leftContent={left} rightContent={right} />
        </div>
        <div
          style={{ minHeight: useGetHeightLessTopbar(), marginRight: '20px', marginLeft: '20px' }}
          className="flex justify-content-center mt-7"
        >
          <div className="w-8 bg-white border-round-lg p-6">
            <div className="flex justify-content-between">
              <div className="flex">
                <div className="mr-4">
                  <Avatar icon="pi pi-user" size="xlarge" className="w-16 h-16 text-2xl" />
                </div>
                <div className="flex flex-column">
                  <span className="text-4xl font-semibold">
                    {lawyerInfo?.data?.LawyerResponseByIdDTO.fullName || ' '}
                  </span>
                  <div className="flex mt-2">
                    <span className="text-lg text-400 mr-2">
                      {lawyerprofilei18n.specialization}
                    </span>
                    <span className="text-lg">
                      {lawyerInfo?.data?.LawyerResponseByIdDTO.specialization || ' '}
                    </span>
                  </div>
                  <div className="flex mt-1">
                    <span className="text-lg text-400 mr-2">{lawyerprofilei18n.oab}:</span>
                    <span className="text-lg">
                      {lawyerInfo?.data?.LawyerResponseByIdDTO.oab || ' '}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                {/* <div className={`${isViewMode() ? 'block' : 'hidden'}`}>
                  <Button label={lawyerprofilei18n.chat} icon="pi pi-comments" />
                </div> */}
                <div className={`${isViewMode() ? 'hidden' : 'block'}`}>
                  <Button
                    disabled={isViewMode()}
                    className="w-full"
                    label={lawyerprofilei18n.edit}
                    onClick={() => setShowEditDialog(true)}
                  />
                </div>
              </div>
            </div>
            <Divider className="my-5" />
            <div className="flex justify-content-between">
              <div className="flex flex-column w-8">
                <span className="text-xl font-bold mb-2">{lawyerprofilei18n.about}</span>
                <span className="text-xl mr-3">
                  {lawyerInfo?.data?.LawyerResponseByIdDTO.description || ' '}
                </span>
              </div>
              <div className="flex flex-column w-4">
                <span className="text-xl font-bold mb-2">{lawyerprofilei18n.contacts}</span>
                <div className="text-xl pi pi-envelope mb-1"> emailDoMano@gmail.com</div>
                <span className="text-xl pi pi-instagram mb-1"> @instaDoMano</span>
                <span className="text-xl pi pi-whatsapp"> (99)99999-9999</span>
              </div>
            </div>
            <Divider className="my-5" />
            <>
              <span className="text-xl font-bold mb-2">{lawyerprofilei18n.services}</span>
            </>

            {/* ----------------------------------------------------- */}
            {/* <div className="text-center">
              <h1>{lawyerprofilei18n.title}</h1>
              <div className="flex flex-column justify-content-center">
                <div className="flex flex-column mb-3">
                  <label className="flex text-left font-semibold text-lg mb-2">
                    {lawyerprofilei18n.user_name}:
                  </label>
                  <div className="flex flex-row align-content-around">
                    <span
                      id="textProfileUsername"
                      className="flex w-10 text-left align-items-center "
                    >
                      {lawyerInfo?.data?.LawyerResponseByIdDTO.fullName || ' '}
                    </span>
                  </div>
                </div>
                <div className="flex flex-column mb-3">
                  <label className="flex text-left font-semibold text-lg mb-2">
                    {lawyerprofilei18n.email}:
                  </label>
                  <div className="flex flex-row align-content-around">
                    <span id="textProfileEmail" className="flex w-10 text-left align-items-center ">
                      {lawyerInfo?.data?.LawyerResponseByIdDTO.email || ' '}
                    </span>
                  </div>
                </div>
                <div className="flex flex-column mb-3">
                  <label className="text-left font-semibold text-lg mb-2">
                    {lawyerprofilei18n.oab}:
                  </label>
                  <span
                    id="textProfileOAB"
                    className="flex mt-2 w-10 text-left align-items-center "
                  >
                    {lawyerInfo?.data?.LawyerResponseByIdDTO.oab || ' '}
                  </span>
                </div>
                <div className="flex flex-column mb-3">
                  <label className="text-left font-semibold text-lg mb-2">
                    {lawyerprofilei18n.cpf}:
                  </label>
                  <span
                    id="textProfileCPF"
                    className="flex mt-2 w-10 text-left align-items-center "
                  >
                    {lawyerInfo?.data?.LawyerResponseByIdDTO.cpf || ' '}
                  </span>
                </div>
                <div className="flex flex-column mb-3">
                  <label className="flex text-left font-semibold text-lg mb-2">
                    {lawyerprofilei18n.specialization}:
                  </label>
                  <div className="flex flex-row align-content-around">
                    <span
                      id="textProfileUsername"
                      className="flex w-10 text-left align-items-center "
                    >
                      {lawyerInfo?.data?.LawyerResponseByIdDTO.specialization || ' '}
                    </span>
                  </div>
                </div>

                <div className="flex flex-column mb-3">
                  <label className="text-left font-semibold text-lg mb-2">
                    {lawyerprofilei18n.about}:
                  </label>
                  <div className="p-float-label">
                    <div>
                      <Fieldset className="text-left m-0">
                        {lawyerInfo?.data?.LawyerResponseByIdDTO.description || ' '}
                      </Fieldset>
                    </div>

                    <div className={`mt-3 ${isViewMode() ? 'hidden' : 'block'}`}>
                      <Button
                        disabled={isViewMode()}
                        className="w-full"
                        label={lawyerprofilei18n.edit}
                        onClick={() => setShowEditDialog(true)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </form>
    </div>
  )
}
