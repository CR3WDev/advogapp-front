import img_men from '@assets/home_imj.jpg'
import { postLawyerList } from '@components/LawyerList/LawerListServices.ts'
import { getI18n } from '@utils/hooks/useGetI18n'
import { useGetLoginResponseDTO } from '@utils/hooks/useGetLoginResponseDTO'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToggleMenuComponent } from '@components/ToggleMenu'
import { LogoTopbarComponent } from '@components/LogoTopbar'
import { LawyerListComponent } from '@components/LawyerList'

export const HomeLoggedPage = () => {
  const navigate = useNavigate()
  const homeI18n = getI18n('home')
  const { mutateAsync: lawyerList, data: responseList } = postLawyerList()
  const loginResponseDTO = useGetLoginResponseDTO()
  const isLawyer = loginResponseDTO?.role ? loginResponseDTO.role === 'lawyer' : false
  const left = () => {
    return (
      <div className="ml-3">
        <span className="hidden md:flex">{homeI18n.find_lawyers}</span>
      </div>
    )
  }
  const right = () => {
    return (
      <div className="flex align-items-center">
        {!isLawyer && (
          <div>
            <Button
              outlined
              text
              onClick={() => {
                navigate('/register/lawyer')
              }}
              label={homeI18n.become_one_of_lawyers}
              className="mr-2"
            ></Button>
          </div>
        )}
        <div className="flex">
          <ToggleMenuComponent />
        </div>
      </div>
    )
  }

  useEffect(() => {
    lawyerList({
      page: 0,
      totalRecords: 20,
    })
  }, [])

  //console.log(responseList)

  return (
    <div>
      <LogoTopbarComponent leftContent={left} rightContent={right} />
      <main className="flex flex-column">
        <section
          className="flex flex-wrap-reverse justify-content-center align-items-center"
          style={{ height: 'calc(100vh - 5rem)' }}
        >
          <div className="p-4">
            <h1 className="md:text-2xl lg:text-4xl">
              {homeI18n.your_tool_for_searching_for_lawyers}
            </h1>
            <div className="flex flex-column p-1">
              <span className="md:text-lg lg:text-xl mb-2">{homeI18n.looking_for_a_lawyer}</span>
              <span className="md:text-lg lg:text-xl">
                {homeI18n.advogapp_helps_you_find_the_lawyer_for_your_case}
              </span>
            </div>
          </div>
          <div className="p-4 md:p-0">
            <img className="shadow-2 border-round-sm" src={img_men} alt="advogado" />
          </div>
        </section>
        <div style={{ paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
          <Divider />
        </div>
        <LawyerListComponent data={responseList?.data?.ResponseListDTO.list} />
      </main>
    </div>
  )
}
