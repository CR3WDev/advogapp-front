import { Dialog } from 'primereact/dialog'
import { Dispatch, SetStateAction } from 'react'

type EditProfileProps = {
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
}
export const EditProfile = ({isVisible,setIsVisible}:EditProfileProps) => {
  return <Dialog draggable={false} visible={isVisible} onHide={()=>{
    setIsVisible(false)
  }}>
teste
  </Dialog>
}
