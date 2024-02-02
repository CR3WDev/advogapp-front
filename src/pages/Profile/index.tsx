import { LogoTopbar } from '@components/LogoTopbar'
import ToggleMenu from '@components/ToggleMenu'
import { getI18n } from '@utils/hooks/useGetI18n'
import { Button } from 'primereact/button'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const ProfilePage = () => {
  const navigate = useNavigate()
  const profileI18n = getI18n('profile')
  const { handleSubmit } = useForm()

  const handleToggleMenuLogoutWasClicked = (_data: boolean) => {
    // setLogoutIsClicked(data)
  }

  const left = () => {
    return <div className="hide-on-cell-phone ml-3">{profileI18n.find_lawyers}</div>
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LogoTopbar leftContent={left} rightContent={right} />
      <div className="content-space auth-format">
        <div className="w-30rem">
          <div className="padding-responsiveness text-center mb-2">
            <span className="title ">{profileI18n.title}</span>
            <div></div>
          </div>
        </div>
      </div>
    </form>
  )
}
