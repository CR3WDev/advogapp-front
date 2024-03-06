import img_men from '@assets/home_imj.jpg'
import { getLawyerListPublic } from '@components/LawyerList/LawerListServices.ts'
import { getI18n } from '@utils/hooks/useGetI18n'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { LogoTopbarComponent } from '@components/LogoTopbar'
import { LawyerListComponent } from '@components/LawyerList'

export const HomeNotLoggedPage = () => {
  const token = sessionStorage.getItem('token')
  if (token) {
    return <Navigate to="/home" />
  }

  const navigate = useNavigate()
  const homeI18n = getI18n('home')
  const { data } = getLawyerListPublic()

  const handleButtonLoginLogoutClick = () => {
    navigate('/login')
  }

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
        <Button outlined label="Login" onClick={handleButtonLoginLogoutClick} />
      </div>
    )
  }

  useEffect(() => {
    // .then((data: any) => {
    //   console.log(data)
    // })
  }, [])

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
        <LawyerListComponent data={data?.data?.ResponseListDTO?.list} />
      </main>
    </div>
  )
}
