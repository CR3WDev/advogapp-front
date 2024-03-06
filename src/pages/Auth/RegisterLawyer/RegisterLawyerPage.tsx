import { useGetHeightLessTopbar } from '@utils/hooks/useGetHeightLessTopbar.ts'
import { getI18n } from '@utils/hooks/useGetI18n'
import { LogoTopbarComponent } from '@components/LogoTopbar'
import { LawyerRegisterComponent } from '@pages/Auth/RegisterLawyer/components/LawyerRegister'

export const RegisterLawyerPage = () => {
  const registerI18n = getI18n('register_lawyer')

  return (
    <>
      <LogoTopbarComponent />
      <div
        style={{ minHeight: useGetHeightLessTopbar(), marginRight: '20px', marginLeft: '20px' }}
        className="flex align-items-center justify-content-center"
      >
        <div className="w-25rem">
          <div className="mb-2">
            <h1 className="text-center">{registerI18n.title}</h1>
          </div>
          <LawyerRegisterComponent />
          <div className="text-center"></div>
        </div>
      </div>
    </>
  )
}
