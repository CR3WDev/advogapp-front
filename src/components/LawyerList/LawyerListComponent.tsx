import imgUserDefault from '@assets/fotoUsuarioBase.png'
import { DataView } from 'primereact/dataview'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { Rating } from 'primereact/rating'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LawyerListStyle.scss'
import { lawTypes } from '@utils/mock/LawyerMock.tsx'

type LawyerListProps = { data: any }

export const LawyerListComponent = ({ data }: LawyerListProps) => {
  const [sortField, _setSortField] = useState('')
  const [sortOrder, _setSortOrder] = useState<0 | 1 | -1 | null>(0)
  const [_sortKey, _setSortKey] = useState('')
  const navigate = useNavigate()

  const [selectedAdv, setSelectedAdv] = useState(null)

  const handleCardOnClick = (lawyer: any) => {
    navigate(`/lawyer/${lawyer.id}`)
  }

  const selectedAdvTemplate = (option: any, props: any) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.type}</div>
        </div>
      )
    }

    return <span>{props.placeholder}</span>
  }

  const advOptionTemplate = (option: any) => {
    return (
      <div className="flex align-items-center">
        <div>{option.type}</div>
      </div>
    )
  }

  const header = () => {
    return (
      <div className="filter">
        <span className="flex flex-row p-input-icon-right">
          <i className="pi pi-search" />
          <InputText placeholder="Pesquisa" className="filterItem" />
        </span>
        <Dropdown
          value={selectedAdv}
          onChange={(e) => setSelectedAdv(e.value)}
          options={lawTypes}
          optionLabel="type"
          placeholder="Especialização"
          filter
          valueTemplate={selectedAdvTemplate}
          itemTemplate={advOptionTemplate}
          className="filterItem"
        />
      </div>
    )
  }
  const itemTemplate = (lawyer: any) => {
    return (
      <div
        className="card card__advogado card__two grid m-2"
        onClick={() => {
          handleCardOnClick(lawyer)
        }}
      >
        <div className="card__img flex flex-row align-items-center">
          <div>
            <img src={imgUserDefault} alt="user_image" />
          </div>
          <div className="flex flex-column ml-2">
            <span className="text-3xl font-bold">{lawyer.fullName} </span>
            <span>{lawyer.specialization} </span>
          </div>
        </div>

        <div className="p-2 sm: p-0">
          <Rating value={lawyer.rating} readOnly cancel={false} className="mb-3" />
          <span className="ml-1">{lawyer.numReviews} 0 avaliações</span>
        </div>
        <div className="about text-justify p-1 w-full">{lawyer.description}</div>
      </div>
    )
  }

  return (
    <div className="card mt-8">
      <DataView
        value={data}
        itemTemplate={itemTemplate}
        paginator
        rows={10}
        header={header()}
        sortField={sortField}
        sortOrder={sortOrder}
      />
    </div>
  )
}
