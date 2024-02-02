import { LogoTopbar } from '@components/LogoTopbar'
import ToggleMenu from '@components/ToggleMenu'
import { getI18n } from '@utils/hooks/useGetI18n'
import { lawTypes } from '@utils/mock'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { classNames } from 'primereact/utils'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const ProfilePage = () => {
  const navigate = useNavigate()
  const profileI18n = getI18n('profile')
  const { control, handleSubmit } = useForm()

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
  const [value, setValue] = useState('')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LogoTopbar leftContent={left} rightContent={right} />
      <div className="content-space auth-format">
        <div className="w-30rem">
          <div className="padding-responsiveness text-center">
            <span className="title mb-4">{profileI18n.title}</span>

            <div className="flex flex-column justify-content-center">
              <div className="flex flex-column mb-3">
                <label className="text-left ml-1">{profileI18n.user_name}</label>
                <InputText
                  id="username"
                  aria-describedby="username-help"
                  placeholder="nome do mano"
                />
              </div>
              <div className="flex flex-column mb-3">
                <label className="text-left ml-1">{profileI18n.password}</label>
                <InputText
                  id="username"
                  aria-describedby="username-help"
                  placeholder="campo provisório"
                />
              </div>
              <div className="flex flex-column mb-3">
                <label className="text-left ml-1">{profileI18n.cpf}</label>
                <InputText
                  id="username"
                  aria-describedby="username-help"
                  placeholder="CPF do mano"
                  disabled
                />
              </div>
              <div className="flex flex-column mb-3">
                <label className="text-left ml-1">{profileI18n.oab}</label>
                <InputText
                  id="username"
                  aria-describedby="username-help"
                  placeholder="OAB do mano"
                  disabled
                />
              </div>
              <div className="flex flex-column mb-3">
                <label className="text-left ml-1">{profileI18n.specialization}</label>
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
                        placeholder={'Especialização do mano'}
                        className={classNames('text-left', { 'p-invalid': fieldState.error })}
                      />
                    </>
                  )}
                />
              </div>

              <div className="flex flex-column mb-3">
                <label className="text-left ml-1">{profileI18n.about}</label>
                <span className="p-float-label">
                  <InputTextarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    rows={5}
                    cols={30}
                    maxLength={225}
                    style={{ resize: 'none', height: '100%', width: '100%' }}
                  />
                </span>
              </div>
              <div>
                <Button
                  className="w-full form-text-responsiveness"
                  label={profileI18n.save_changes}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
