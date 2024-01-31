import { useNavigate } from 'react-router-dom'

import { LogoTopbar } from '@components/LogoTopbar'
import { getI18n } from '@utils/hooks/useGetI18n'
import { LawyerRegister } from './components/LawyerRegister'

import '../index.scss'

export const RegisterLawyer = () => {
  const registerI18n = getI18n('register_lawyer')
  const navigate = useNavigate()

  return (
    <>
      <LogoTopbar />
      <div className="content-space auth-format">
        <div className="w-25rem">
          <div className="padding-responsiveness text-center mb-2">
            <span className="title ">{registerI18n.title}</span>
          </div>
          <LawyerRegister />
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
