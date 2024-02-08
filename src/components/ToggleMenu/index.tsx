import { getI18n } from '@utils/hooks/useGetI18n'
import 'primeicons/primeicons.css'
import { Button } from 'primereact/button'
import { TieredMenu } from 'primereact/tieredmenu'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ToggleMenu({
  logoutWasClicked,
}: {
  logoutWasClicked: (arg: boolean) => void
}) {
  const navigate = useNavigate()
  const toggleMenuI18n = getI18n('toggle_menu')
  const menu = useRef<any>(null)

  useEffect(() => {
    if (menu.current) {
      menu.current.toggle = (e: any) => {
        menu.current.show(e)
      }
    }
  }, [])

  const handleLogoutClick = () => {
    sessionStorage.clear()
    logoutWasClicked(true)
    navigate('/')
  }

  const items = [
    {
      label: toggleMenuI18n.home,
      icon: 'pi pi-home',
      command: () => {
        navigate('/')
      },
    },
    {
      label: toggleMenuI18n.profile,
      icon: 'pi pi-user',
      command: () => {
        navigate('/profilepage')
      },
    },
    {
      label: toggleMenuI18n.messages,
      icon: 'pi pi-envelope',
    },
    {
      separator: true,
    },
    {
      label: toggleMenuI18n.logout,
      icon: 'pi pi-sign-out',
      command: () => {
        handleLogoutClick()
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