import img_men from '@assets/home_imj.jpg'
import LawyerPagination from '@components/LawyerList/LawyerPagination'
import { LogoTopbar } from '@components/LogoTopbar'
import { getI18n } from '@utils/hooks/useGetI18n'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import { useNavigate } from 'react-router-dom'
import '../index.scss'

export const HomeLogged = ({ setLogoutIsClicked }: any) => {
  const navigate = useNavigate()
  const homeI18n = getI18n('home')

  const handleButtonLoginLogoutClick = () => {
    sessionStorage.clear()
    setLogoutIsClicked(true)
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
            onClick={() => {
              navigate('/registerlawyer')
            }}
            label={homeI18n.become_one_of_lawyers}
            className="mr-2"
          ></Button>
        </div>
        <div>
          <Button outlined label="Logout" onClick={handleButtonLoginLogoutClick} />
        </div>
      </div>
    )
  }

  return (
    <div>
      <LogoTopbar leftContent={left} rightContent={right} />
      <main className="flex flex-column">
        <section className="flex01" style={{ height: 'calc(100vh - 5rem)' }}>
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
        <div style={{ paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
          <Divider />
        </div>
        <LawyerPagination />
      </main>
    </div>
  )
}
