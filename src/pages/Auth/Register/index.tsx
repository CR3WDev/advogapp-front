import { useNavigate } from 'react-router-dom'

import { LogoTopbar } from '@components/LogoTopbar'
import { useGetHeightLessTopbar } from '@utils/hooks/useGetHeightLessTopbar.ts'
import { getI18n } from '@utils/hooks/useGetI18n'
import { UserRegister } from './components/UserRegister'

export const RegisterPage = () => {
  const registerI18n = getI18n('register')
  const navigate = useNavigate()

  return (
    <div>
      <LogoTopbar />
      <div
        style={{ minHeight: useGetHeightLessTopbar(), marginRight: '20px', marginLeft: '20px' }}
        className="flex align-items-center justify-content-center"
      >
        <div className="w-16rem">
          <div className="text-center mb-3">
            <h1>{registerI18n.title}</h1>
          </div>
          <UserRegister />
          <div className="text-center ">
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
            <div className="mt-2">
              <span>{registerI18n.return_to}</span>
              <span
                onClick={() => {
                  navigate('/')
                }}
                className="no-underline hover:underline text-primary cursor-pointer ml-1"
              >
                {registerI18n.home}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
