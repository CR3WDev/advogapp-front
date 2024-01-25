import { useNavigate } from 'react-router-dom'

import { LogoTopbar } from '@components/LogoTopbar'
import { getI18n } from '@utils/hooks/useGetI18n'
import { UserRegister } from './components/UserRegister'

export const RegisterPage = () => {
  const registerI18n = getI18n('register')
  const navigate = useNavigate()

  return (
    <>
      <LogoTopbar />
      <div className="h-screen w-screen flex justify-content-center align-items-center">
        <div className="flex flex-column">
          <div className="text-center mb-2">
            <h1>{registerI18n.title}</h1>
          </div>
          <UserRegister />
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
