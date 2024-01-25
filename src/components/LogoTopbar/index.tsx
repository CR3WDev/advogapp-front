import img from '@assets/icon.svg'
import { useNavigate } from 'react-router-dom'

type LogoTopbarProps = {
  rightContent?: () => JSX.Element
  leftContent?: () => JSX.Element
}
export const LogoTopbar = ({ rightContent, leftContent }: LogoTopbarProps) => {
  const navigate = useNavigate()
  return (
    <div>
      <div
        className="absolute cursor-pointer"
        style={{ top: 20, left: 20 }}
        onClick={() => {
          navigate('/')
        }}
      >
        <img
          src={img}
          alt=""
          style={{ borderRadius: 5, overflow: 'hidden', height: '53px', width: '53px' }}
        />
      </div>
      <div style={{ marginLeft: '73px', paddingTop: '20px', marginRight: '20px' }}>
        <div style={{ height: '53px' }} className="flex justify-content-between align-items-center">
          {rightContent && rightContent()}
          {leftContent && leftContent()}
        </div>
      </div>
    </div>
  )
}
