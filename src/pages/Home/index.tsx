import { getI18n } from '@utils/hooks/useGetI18n'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LawyerPagination from '@components/LawyerList/LawyerPagination'
import { LogoTopbar } from '@components/LogoTopbar'
import img_men from '@assets/home_imj.jpg'
import './index.scss'

export const HomePage = () => {
  const navigate = useNavigate()
  const homeI18n = getI18n('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  const handleButtonLoginLogoutClick = () => {
    if (isLoggedIn) {
      sessionStorage.clear()
      setIsLoggedIn(false)
    } else {
      navigate('/login')
    }
  }

  const left = () => {
    return <div className="ml-3">{homeI18n.findLawyers}</div>
  }
  const right = () => {
    return (
      <div className="flex align-items-center">
        <div>
          <Button
            outlined
            text
            onClick={() => {}}
            label={homeI18n.become_one_of_lawyers}
            className="mr-2"
          ></Button>
        </div>
        <div>
          <Button outlined onClick={handleButtonLoginLogoutClick}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <LogoTopbar leftContent={left} rightContent={right} />
      <main
        className="flex flex-column"
        style={{
          height: 'calc(300vh - 5rem)',
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            height: 'calc(100vh - 5rem)',
            backgroundColor: '#ffffff',
          }}
        >
          <section className="flex01">
            <div className="p-4">
              <h1 className="md:text-2xl lg:text-4xl">{homeI18n.yourToolForSearchingForLawyers}</h1>
              <div className="flex flex-column p-1">
                <span className="md:text-lg lg:text-xl mb-2">{homeI18n.lookingForALawyer}</span>
                <span className="md:text-lg lg:text-xl">
                  {homeI18n.AdvogappHelpsYouFindTheLawyerForYourCase}
                </span>
              </div>
            </div>
            <div className="p-4 md:p-0">
              <img src={img_men} />
            </div>
          </section>
        </div>
        <div
          style={{
            height: '200vh',
            overflowY: 'auto',
            backgroundColor: '#ffffff',
          }}
        >
          <Divider />
          <LawyerPagination />
        </div>
      </main>
    </div>
  )
}
