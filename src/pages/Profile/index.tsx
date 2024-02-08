import { LogoTopbar } from '@components/LogoTopbar'
import ToggleMenu from '@components/ToggleMenu'
import { getI18n } from '@utils/hooks/useGetI18n'
import { lawTypes } from '@utils/mock'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { classNames } from 'primereact/utils'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './index.scss'

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
  const [aboutValue, setAboutValue] = useState('')

  const [editUserNameVisible, setEditUserNameVisible] = useState(false)
  const [editUserSpecializationVisible, setEditUserSpecializationVisible] = useState(false)
  const [editUserAboutVisible, setEditUserAboutVisible] = useState(false)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LogoTopbar leftContent={left} rightContent={right} />
      <div className="content-space auth-format">
        <div className="w-30rem">
          <div className="padding-responsiveness text-center">
            <span className="title mb-4">{profileI18n.title}</span>

            <div className="flex flex-column justify-content-center">
              <div className="flex flex-column mb-3">
                <label className="flex text-left form-text-responsiveness">
                  {profileI18n.user_name}:
                </label>
                <div className="flex flex-row align-content-around">
                  <span
                    id="textProfileUsername"
                    className="flex w-10 text-left align-items-center text-responsiveness"
                  >
                    Nome do mano
                  </span>
                  <Button
                    className="max-w-6rem form-text-responsiveness ml-2"
                    label={profileI18n.edit}
                    onClick={() => setEditUserNameVisible(true)}
                  />

                  <Dialog
                    header={profileI18n.edit_user_name}
                    visible={editUserNameVisible}
                    onHide={() => setEditUserNameVisible(false)}
                    style={{ width: '35vw' }}
                    breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                  >
                    <div className="flex flex-column align-content-around">
                      <InputText
                        id="username"
                        aria-describedby="username-help"
                        placeholder="nome do mano"
                        className="max-w-full mb-2"
                      />
                      <Button
                        className="max-w-full form-text-responsiveness"
                        label={profileI18n.save_changes}
                        onClick={() => setEditUserNameVisible(false)}
                      />
                    </div>
                  </Dialog>
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
                    className="max-w-6rem form-text-responsiveness ml-2"
                    label={profileI18n.edit}
                  />
                </div>
              </div> */}

              <div className="flex flex-column mb-3">
                <label className="flex text-left form-text-responsiveness">
                  {profileI18n.email}:
                </label>
                <div className="flex flex-row align-content-around">
                  <span
                    id="textProfileEmail"
                    className="flex w-10 text-left align-items-center text-responsiveness"
                  >
                    emailDoMano@gmail.com
                  </span>
                  <Button
                    className="max-w-6rem form-text-responsiveness ml-2"
                    label={profileI18n.edit}
                  />
                </div>
              </div>

              <div className="flex flex-column mb-3">
                <label className="text-left form-text-responsiveness">{profileI18n.oab}:</label>
                <span
                  id="textProfileOAB"
                  className="flex mt-2 w-10 text-left align-items-center text-responsiveness"
                >
                  aa999999
                </span>
              </div>

              <div className="flex flex-column mb-3">
                <label className="text-left form-text-responsiveness">{profileI18n.cpf}:</label>
                <span
                  id="textProfileCPF"
                  className="flex mt-2 w-10 text-left align-items-center text-responsiveness"
                >
                  999.999.999-99
                </span>
              </div>

              <div className="flex flex-column mb-3">
                <label className="flex text-left form-text-responsiveness">
                  {profileI18n.specialization}:
                </label>
                <div className="flex flex-row align-content-around">
                  <span
                    id="textProfileUsername"
                    className="flex w-10 text-left align-items-center text-responsiveness"
                  >
                    Especialização do mano
                  </span>
                  <Button
                    className="max-w-6rem form-text-responsiveness ml-2"
                    label={profileI18n.edit}
                    onClick={() => setEditUserSpecializationVisible(true)}
                  />

                  <Dialog
                    header={profileI18n.edit_user_specialization}
                    visible={editUserSpecializationVisible}
                    onHide={() => setEditUserSpecializationVisible(false)}
                    style={{ width: '35vw' }}
                    breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                  >
                    <div className="flex flex-column align-content-around">
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
                              className={classNames('text-left mb-2', {
                                'p-invalid': fieldState.error,
                              })}
                            />
                          </>
                        )}
                      />
                      <Button
                        className="max-w-full form-text-responsiveness"
                        label={profileI18n.save_changes}
                        onClick={() => setEditUserSpecializationVisible(false)}
                      />
                    </div>
                  </Dialog>
                </div>
              </div>

              <div className="flex flex-column mb-3">
                <label className="text-left ml-1">{profileI18n.about}:</label>
                <div className="p-float-label">
                  <InputTextarea
                    value={aboutValue}
                    onChange={(e) => setAboutValue(e.target.value)}
                    rows={5}
                    cols={30}
                    maxLength={225}
                    style={{ resize: 'none', height: '100%', width: '100%' }}
                    disabled
                  />
                  <Button
                    className="max-w-full form-text-responsiveness"
                    label={profileI18n.edit}
                    onClick={() => setEditUserAboutVisible(true)}
                  />

                  <Dialog
                    header={profileI18n.edit_user_about}
                    visible={editUserAboutVisible}
                    onHide={() => setEditUserAboutVisible(false)}
                    style={{ width: '30vw' }}
                    breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                  >
                    <div className="flex flex-column align-content-around">
                      <div className="mb-2">
                        <InputTextarea
                          value={aboutValue}
                          onChange={(e) => setAboutValue(e.target.value)}
                          rows={5}
                          cols={30}
                          maxLength={225}
                          style={{ resize: 'none', height: '100%', width: '100%' }}
                        />
                      </div>
                      <Button
                        className="max-w-full form-text-responsiveness"
                        label={profileI18n.save_changes}
                        onClick={() => setEditUserAboutVisible(false)}
                      />
                    </div>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
