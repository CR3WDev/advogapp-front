import { LogoTopbar } from '@components/LogoTopbar'
import ToggleMenu from '@components/ToggleMenu'
import { EditProfile } from '@pages/Profile/EditProfile'
import { getLawyerInfo } from '@pages/Profile/service.ts'
import { useGetHeightLessTopbar } from '@utils/hooks/useGetHeightLessTopbar.ts'
import { getI18n } from '@utils/hooks/useGetI18n'
import { Button } from 'primereact/button'
import { Fieldset } from 'primereact/fieldset'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const ProfilePage = () => {
  const navigate = useNavigate()
  const profileI18n = getI18n('profile')
  const [aboutValue, setAboutValue] = useState('')
  const [showEditDialog, setShowEditDialog] = useState(false)
  const { handleSubmit } = useForm()

  const { data } = getLawyerInfo()
  const handleToggleMenuLogoutWasClicked = (_data: boolean) => {
    // setLogoutIsClicked(data)
  }

  const left = () => {
    return (
      <div className=" ml-3">
        <span className="hidden md:flex">{profileI18n.find_lawyers}</span>
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
              navigate('/registerlawyer')
            }}
            label={profileI18n.become_one_of_lawyers}
            className="mr-2"
          ></Button>
        </div>
        <div className="flex">
          <ToggleMenu logoutWasClicked={handleToggleMenuLogoutWasClicked} />
        </div>
      </div>
    )
  }

  const onSubmit = (_data: any) => {}

  //console.log(data)

  return (
    <>
      <EditProfile isVisible={showEditDialog} setIsVisible={setShowEditDialog} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <LogoTopbar leftContent={left} rightContent={right} />
        <div
          style={{ height: useGetHeightLessTopbar() }}
          className="flex align-items-center justify-content-center"
        >
          <div className="w-30rem">
            <div className="text-center">
              <h1>{profileI18n.title}</h1>
              <div className="flex flex-column justify-content-center">
                <div className="flex flex-column mb-3">
                  <label className="flex text-left font-semibold text-lg mb-2">
                    {profileI18n.user_name}:
                  </label>
                  <div className="flex flex-row align-content-around">
                    <span
                      id="textProfileUsername"
                      className="flex w-10 text-left align-items-center "
                    >
                      {data?.data.fullName || ' '}
                    </span>
                  </div>
                </div>

                {/* <div className="flex flex-column mb-3">
                <label className="flex text-left ml-1">{profileI18n.password}</label>
                <div className="flex flex-row align-content-around">
                  <InputText
                    id="username"
                    aria-describedby="username-help"
                    placeholder="campo provisório"
                    className="w-10"
                    disabled
                  />
                  <Button
                    className="max-w-6rem  ml-2"
                    label={profileI18n.edit}
                  />
                </div>
              </div> */}

                <div className="flex flex-column mb-3">
                  <label className="flex text-left font-semibold text-lg mb-2">
                    {profileI18n.email}:
                  </label>
                  <div className="flex flex-row align-content-around">
                    <span id="textProfileEmail" className="flex w-10 text-left align-items-center ">
                      {data?.data.email || ' '}
                    </span>
                  </div>
                </div>

                <div className="flex flex-column mb-3">
                  <label className="text-left font-semibold text-lg mb-2">{profileI18n.oab}:</label>
                  <span
                    id="textProfileOAB"
                    className="flex mt-2 w-10 text-left align-items-center "
                  >
                    {data?.data.oab || ' '}
                  </span>
                </div>

                <div className="flex flex-column mb-3">
                  <label className="text-left font-semibold text-lg mb-2">{profileI18n.cpf}:</label>
                  <span
                    id="textProfileCPF"
                    className="flex mt-2 w-10 text-left align-items-center "
                  >
                    {data?.data.cpf || ' '}
                  </span>
                </div>

                <div className="flex flex-column mb-3">
                  <label className="flex text-left font-semibold text-lg mb-2">
                    {profileI18n.specialization}:
                  </label>
                  <div className="flex flex-row align-content-around">
                    <span
                      id="textProfileUsername"
                      className="flex w-10 text-left align-items-center "
                    >
                      {data?.data.specialization || ' '}
                    </span>
                  </div>
                </div>

                <div className="flex flex-column mb-3">
                  <label className="text-left font-semibold text-lg mb-2">
                    {profileI18n.about}:
                  </label>
                  <div className="p-float-label">
                    <Fieldset className="text-left m-0">{data?.data.description || ' '}</Fieldset>
                    <div>
                      <Button
                        className="w-full mt-2"
                        label={profileI18n.edit}
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
