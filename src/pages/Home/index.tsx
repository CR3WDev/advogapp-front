import { getI18n } from '@utils/hooks/useGetI18n'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LawyerPagination from '@components/adv/LawyerPagination'
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
            className="mr-3"
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
          height: 'calc(270vh - 5rem)',
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
            <div className="p-5">
              <h1>{homeI18n.yourToolForSearchingForLawyers}</h1>
              <span>{homeI18n.lookingForALawyer}</span>
              <span>{homeI18n.AdvogappHelpsYouFindTheLawyerForYourCase}</span>
            </div>
            <div className="p-5">
              <img src={img_men} />
            </div>
          </section>
        </div>
        <div
          className="flex flex-column m-8"
          style={{
            height: '170vh',
            overflowY: 'auto',
            backgroundColor: '#ffffff',
          }}
        >
          <Divider />
          {/* <CardLawyerList /> */}
          <LawyerPagination />
        </div>
      </main>
    </div>
  )
}
