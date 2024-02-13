import { LogoTopbar } from '@components/LogoTopbar'
import ToggleMenu from '@components/ToggleMenu'
import { useGetHeightLessTopbar } from '@utils/hooks/useGetHeightLessTopbar.ts'
import { getI18n } from '@utils/hooks/useGetI18n'
import { Button } from 'primereact/button'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { EditUserProfile } from './EditUserProfile'

export const UserProfilePage = () => {
  const navigate = useNavigate()
  const userprofileI18n = getI18n('user_profile')
  const [showEditDialog, setShowEditDialog] = useState(false)
  const { handleSubmit } = useForm()

  const handleToggleMenuLogoutWasClicked = (_data: boolean) => {
    // setLogoutIsClicked(data)
  }

  const left = () => {
    return (
      <div className=" ml-3">
        <span className="hidden md:flex">{userprofileI18n.find_lawyers}</span>
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
            label={userprofileI18n.become_one_of_lawyers}
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
      <EditUserProfile isVisible={showEditDialog} setIsVisible={setShowEditDialog} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <LogoTopbar leftContent={left} rightContent={right} />
        <div
          style={{ minHeight: useGetHeightLessTopbar() }}
          className="flex align-items-center justify-content-center"
        >
          <div className="w-30rem">
            <div className="text-center">
              <h1>{userprofileI18n.title}</h1>
              <div className="flex flex-column justify-content-center">
                <div className="flex flex-column mb-3">
                  <label className="flex text-left font-semibold text-lg mb-2">
                    {userprofileI18n.user_name}:
                  </label>
                  <div className="flex flex-row align-content-around">
                    <span
                      id="textProfileUsername"
                      className="flex w-10 text-left align-items-center "
                    >
                      {/* {data?.data.fullName || ' '} */} Nome do mano
                    </span>
                  </div>
                </div>

                {/* <div className="flex flex-column mb-3">
                <label className="flex text-left ml-1">{userprofileI18n.password}</label>
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
                    label={userprofileI18n.edit}
                  />
                </div>
              </div> */}

                <div className="flex flex-column mb-3">
                  <label className="flex text-left font-semibold text-lg mb-2">
                    {userprofileI18n.email}:
                  </label>
                  <div className="flex flex-row align-content-around">
                    <span id="textProfileEmail" className="flex w-10 text-left align-items-center ">
                      {/* {data?.data.email || ' '} */} Email do mano
                    </span>
                  </div>
                </div>

                <div>
                  <Button
                    className="w-full mt-2"
                    label={userprofileI18n.edit}
                    onClick={() => setShowEditDialog(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
