import { LogoTopbar } from '@components/LogoTopbar'
import { useGetHeightLessTopbar } from '@utils/hooks/useGetHeightLessTopbar.ts'
import { getI18n } from '@utils/hooks/useGetI18n'
import { LawyerRegister } from './components/LawyerRegister'

export const RegisterLawyer = () => {
  const registerI18n = getI18n('register_lawyer')

  return (
    <>
      <LogoTopbar />
      <div
        style={{ minHeight: useGetHeightLessTopbar(), marginRight: '20px', marginLeft: '20px' }}
        className="flex align-items-center justify-content-center"
      >
        <div className="w-25rem">
          <div className="mb-2">
            <h1 className="text-center">{registerI18n.title}</h1>
          </div>
          <LawyerRegister />
          <div className="text-center"></div>
        </div>
      </div>
    </>
  )
}
