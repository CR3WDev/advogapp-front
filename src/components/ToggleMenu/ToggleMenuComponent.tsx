import { getI18n } from '@utils/hooks/useGetI18n'
import { useGetLoginResponseDTO } from '@utils/hooks/useGetLoginResponseDTO'
import 'primeicons/primeicons.css'
import { Button } from 'primereact/button'
import { TieredMenu } from 'primereact/tieredmenu'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export const ToggleMenuComponent = () => {
  const navigate = useNavigate()
  const toggleMenuI18n = getI18n('toggle_menu')
  const menu = useRef<any>(null)
  const loginResponseDTO = useGetLoginResponseDTO()
  const isLawyer = loginResponseDTO?.role ? loginResponseDTO?.role === 'lawyer' : false
  const userId = loginResponseDTO?.userId
  const lawyerId = loginResponseDTO?.lawyerId
  useEffect(() => {
    if (menu.current) {
      menu.current.toggle = (e: any) => {
        menu.current.show(e)
      }
    }
  }, [])

  const items = [
    {
      label: toggleMenuI18n.home,
      icon: 'pi pi-home',
      command: () => {
        navigate('/home')
      },
    },
    {
      label: toggleMenuI18n.profile,
      icon: 'pi pi-user',
      command: () => {
        if (isLawyer) navigate(`/lawyer/${lawyerId}`)
        else navigate(`/user/${userId}`)
      },
    },
    {
      separator: true,
    },
    {
      label: toggleMenuI18n.logout,
      icon: 'pi pi-sign-out',
      command: () => {
        sessionStorage.clear()
        navigate('/')
      },
    },
  ]

  return (
    <div>
      <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
      <Button label={toggleMenuI18n.menu} onClick={(e) => menu.current.toggle(e)} />
    </div>
  )
}
