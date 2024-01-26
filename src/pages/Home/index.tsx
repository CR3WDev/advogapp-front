import img_men from '@assets/home_imj.jpg'
import { LogoTopbar } from '@components/LogoTopbar'
import LawyerPagination from '@components/adv/LawyerPagination'
import { getI18n } from '@utils/hooks/useGetI18n'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate()
  const homeI18n = getI18n('home')

  const right = () => {
    return <div className="ml-3">{homeI18n.findLawyers}</div>
  }
  const left = () => {
    return (
      <div className="flex">
        <div>
          <Button
            outlined
            text
            onClick={() => {}}
            label={homeI18n.becomes_one_of_lawyers}
            className="mr-3"
          ></Button>
        </div>
        <div>
          <Button
            outlined
            onClick={() => {
              navigate('/login')
            }}
          >
            {homeI18n.login}
          </Button>
        </div>
      </div>
    )
  }
  return (
    <div>
      <LogoTopbar rightContent={right} leftContent={left} />
      <main
        className="flex flex-column"
        style={{
          height: 'calc(270vh - 5rem)',
          overflowY: 'auto',
        }}
      >
        <div
          className="flex"
          style={{
            height: 'calc(100vh - 5rem)',
            backgroundColor: '#ffffff',
            overflowY: 'auto',
            // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex flex-column-reverse xl:flex-row w-screen align-items-center justify-content-evenly">
            <div className="mx-4">
              <div>
                <h1>{homeI18n.yourToolForSearchingForLawyers}</h1>
              </div>
              <div>
                <span>
                  {homeI18n.lookingForALawyer} <br />
                  {homeI18n.AdvogappHelpsYouFindTheLawyerForYourCase}
                </span>
              </div>
            </div>
            <div className="mx-8">
              <img
                src={img_men}
                style={{
                  borderRadius: 5,
                  width: '40vw',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
                className="mx-4"
              />
            </div>
          </div>
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
