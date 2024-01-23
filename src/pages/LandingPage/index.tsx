import { LogoTopbar } from '@components/LogoTopbar'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'

export const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <LogoTopbar />
      <div className="h-screen w-screen flex justify-content-center align-items-center">
        <div className="flex flex-column w-16rem align-items-center">
          <h1>Pagina Inicial</h1>
          <Button
            className="mt-3 w-full"
            label={'login'}
            onClick={() => {
              navigate('/login')
            }}
          ></Button>
        </div>
      </div>
    </>
  )
}
