import { getI18n } from '@utils/hooks/useGetI18n.ts'
import 'primeicons/primeicons.css'
import { TieredMenu } from 'primereact/tieredmenu'
import { useEffect, useRef } from 'react'

export const ProfileServicesMenuComponent = () => {
  const toggleMenuI18n = getI18n('lawyer_profile')
  const menu = useRef<any>(null)

  useEffect(() => {
    if (menu.current) {
      menu.current.toggle = (e: any) => {
        menu.current.show(e)
      }
    }
  }, [])

  const items = [
    {
      label: toggleMenuI18n.edit,
      icon: 'pi pi-pencil',
      command: () => {
      },
    },

    {
      separator: true,
    },
    {
      label: toggleMenuI18n.delete,
      icon: 'pi pi-trash',
      command: () => {
      },
    },
  ]

  return (
    <div>
      <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
      <i
        className={'pi pi-ellipsis-v text-xl'}
        style={{ cursor: 'pointer' }}
        onClick={(e) => menu.current.toggle(e)}
      />
    </div>
  )
}
