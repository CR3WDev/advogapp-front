import { useNavigate } from 'react-router-dom'

import { LogoTopbar } from '@components/LogoTopbar'
import { getI18n } from '@utils/hooks/useGetI18n'
import { UserRegister } from './components/UserRegister'

import '../index.scss'

export const RegisterPage = () => {
  const registerI18n = getI18n('register')
  const navigate = useNavigate()

  return (
    <>
      <LogoTopbar />
      <div className="content-space auth-format">
        <div className="w-16rem">
          <div className="text-center mb-3">
            <span className="title">{registerI18n.title}</span>
          </div>
          <UserRegister />
          <div className="text-center form-text-responsiveness">
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
