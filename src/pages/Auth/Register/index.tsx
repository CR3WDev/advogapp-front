import { useNavigate } from 'react-router-dom'

import { LogoTopbar } from '@components/LogoTopbar'
import { getI18n } from '@utils/hooks/useGetI18n'
import { SelectButton } from 'primereact/selectbutton'
import { useState } from 'react'
import { LawyerRegister } from './components/LawyerRegister'
import { UserRegister } from './components/UserRegister'

export const RegisterPage = () => {
  const registerI18n = getI18n('register')
  const [isLawyerRegister, setIsLawyerRegister] = useState(registerI18n.user)
  const navigate = useNavigate()
  const options = [registerI18n.user, registerI18n.lawyer]

  return (
    <>
      <LogoTopbar />
      <div className="h-screen w-screen flex justify-content-center align-items-center">
        <div className="flex flex-column">
          <div className="text-center mb-2">
            <h1>{registerI18n.title}</h1>
          </div>
          <div className="flex justify-content-center mb-3">
            <SelectButton
              value={isLawyerRegister}
              onChange={(e) => setIsLawyerRegister(e.value)}
              options={options}
            />
          </div>
          {isLawyerRegister === registerI18n.lawyer ? <LawyerRegister /> : <UserRegister />}
          <div className="text-center">
            <div>
              <span>{registerI18n.already_have_an_account}</span>
              <span
                onClick={() => {
                  navigate('/login')
                }}
                className="no-underline hover:underline text-primary cursor-pointer ml-2"
              >
                {registerI18n.go_login}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
