import imgUserDefault from '@assets/fotoUsuarioBase.png'
import { Rating } from 'primereact/rating'
import './index.scss'

export const LawyerItem = (props: {
  id: string
  name: string
  specialization: string
  rating: number
  numReviews: number
  about: string
}) => {
  return (
    <div className="my-3 flex card__advogado card card__two">
      <div className="flex justify-content-center ">
        <img
          src={imgUserDefault}
          style={{
            width: '100px',
            height: '100px',
          }}
          className="mx-4"
        />
        <div className="ml-4 mr-6">
          <h2 className="my-2">{props.name} </h2>
          <span>{props.specialization} </span>
        </div>
        <div className="max-width-sobre">{props.about} </div>
      </div>
      <div className="ml-4 mr-8">
        <Rating value={props.rating} readOnly cancel={false} className="mb-3" />
        <span className="ml-1">{props.numReviews} avaliações</span>
      </div>
    </div>
  )
}
