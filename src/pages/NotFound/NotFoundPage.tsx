import { getI18n } from '@utils/hooks/useGetI18n'
import { useGetLoginResponseDTO } from '@utils/hooks/useGetLoginResponseDTO'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
import { LogoTopbarComponent } from '@components/LogoTopbar'

export const NotFoundPage = () => {
  const navigate = useNavigate()
  const notFoundPageI18n = getI18n('not_found')
  const isLogged = !!useGetLoginResponseDTO()

  return (
    <div className="h-screen w-screen flex justify-content-center align-items-center">
      <div className="flex flex-column w-16rem align-items-center">
        <LogoTopbarComponent />
        <span className="text-4xl">{notFoundPageI18n.oops}</span>
        <span className="text-8xl">{notFoundPageI18n.erro404}</span>
        <span className="text-xl">{notFoundPageI18n.page_not_found}</span>
        <Button
          className="mt-5"
          outlined
          onClick={() => {
            isLogged ? navigate('/home') : navigate('/')
          }}
        >
          {notFoundPageI18n.return_to_home_page}
        </Button>
      </div>
    </div>
  )
}
