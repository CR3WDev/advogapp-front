import img from '@assets/icon.svg'
import { useGetLoginResponseDTO } from '@utils/hooks/useGetLoginResponseDTO'
import { useNavigate } from 'react-router-dom'

type LogoTopbarProps = {
  rightContent?: () => JSX.Element
  leftContent?: () => JSX.Element
}
export const LogoTopbar = ({ rightContent, leftContent }: LogoTopbarProps) => {
  const navigate = useNavigate()
  const loginResponseDTO = useGetLoginResponseDTO()

  return (
    <div>
      <div
        className="absolute cursor-pointer"
        style={{ top: 20, left: 20 }}
        onClick={() => {
          !loginResponseDTO ? navigate('/') : navigate('/home')
        }}
      >
        <img
          src={img}
          alt="logo"
          style={{ borderRadius: 5, overflow: 'hidden', height: '53px', width: '53px' }}
        />
      </div>
      <div style={{ marginLeft: '73px', paddingTop: '20px', marginRight: '20px' }}>
        <div
          style={{ height: '53px' }}
          className="justify-content-end sm:justify-content-between flex align-items-center"
        >
          {leftContent && leftContent()}
          {rightContent && rightContent()}
        </div>
      </div>
    </div>
  )
}
