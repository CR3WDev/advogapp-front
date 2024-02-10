import { useNavigate } from 'react-router-dom'

import { LogoTopbar } from '@components/LogoTopbar'
import { getI18n } from '@utils/hooks/useGetI18n'
import { LawyerRegister } from './components/LawyerRegister'
import { useGetHeightLessTopbar } from '@utils/hooks/useGetHeightLessTopbar.ts'

export const RegisterLawyer = () => {
  const registerI18n = getI18n('register_lawyer')
  const navigate = useNavigate()

  return (
    <>
      <LogoTopbar />
      <div style={{height:useGetHeightLessTopbar()}} className="flex align-items-center justify-content-center">
        <div className="w-25rem">
          <div className="mb-2">
            <h1 className="text-center">{registerI18n.title}</h1>
          </div>
          <LawyerRegister />
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
