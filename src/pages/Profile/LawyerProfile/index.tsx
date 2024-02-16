import { LogoTopbar } from '@components/LogoTopbar'
import ToggleMenu from '@components/ToggleMenu'
import { EditLawyerProfile } from '@pages/Profile/LawyerProfile/EditLawyerProfile'
import { getLawyerInfo } from '@pages/Profile/LawyerProfile/service'
import { useGetHeightLessTopbar } from '@utils/hooks/useGetHeightLessTopbar.ts'
import { getI18n } from '@utils/hooks/useGetI18n'
import { useGetIdByURL } from '@utils/hooks/useGetIdByURL'
import { useGetUserInfo } from '@utils/hooks/useGetUserInfo'
import { Button } from 'primereact/button'
import { Fieldset } from 'primereact/fieldset'
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

  const isViewMode = (): boolean => {
    if (!tokenUserId) return true
    if (!lawyerInfo?.data?.LawyerResponseByIdDTO) return true
    if (tokenUserId !== lawyerInfo?.data?.LawyerResponseByIdDTO) return true
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
        <div className="flex">
          <ToggleMenu />
        </div>
      </div>
    )
  }

  const onSubmit = (data: any) => {
    // setFormData(data)
  }

  return (
    <>
      <EditLawyerProfile
        isVisible={showEditDialog}
        setIsVisible={setShowEditDialog}
        data={lawyerInfo?.data}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <LogoTopbar leftContent={left} rightContent={right} />
        <div
          style={{ minHeight: useGetHeightLessTopbar(), marginRight: '20px', marginLeft: '20px' }}
          className="flex align-items-center justify-content-center"
        >
          <div className="w-30rem">
            <div className="text-center">
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
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
