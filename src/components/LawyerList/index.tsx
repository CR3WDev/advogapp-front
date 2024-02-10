import imgUserDefault from '@assets/fotoUsuarioBase.png'
import { DataView } from 'primereact/dataview'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { Rating } from 'primereact/rating'
import { useState } from 'react'
import './index.scss'
type LawyerListProps = { data: any }

export const LawyerList = ({ data }: LawyerListProps) => {
  const [sortField, _setSortField] = useState('')
  const [sortOrder, _setSortOrder] = useState<0 | 1 | -1 | null>(0)
  const [_sortKey, _setSortKey] = useState('')

  // const onSortChange = (event: any) => {
  //   const value = event.value

  //   if (value.indexOf('!') === 0) {
  //     setSortOrder(-1)
  //     setSortField(value.substring(1, value.length))
  //     setSortKey(value)
  //   } else {
  //     setSortOrder(1)
  //     setSortField(value)
  //     setSortKey(value)
  //   }
  // }

  const [selectedAdv, setSelectedAdv] = useState(null)
  const advType = [
    { type: 'Todos' },
    { type: 'Direito Cível' },
    { type: 'Direito Trabalhista' },
    { type: 'Direito Imobiliário' },
    { type: 'Direito Ambientalista' },
    { type: 'Direito do consumidor' },
    { type: 'Direito Criminalista' },
    { type: 'Direito Previdenciário' },

    { type: 'Direito Digital' },
    { type: 'Direito Tributário' },
    { type: 'Direito Administrativo' },
    { type: 'Direito da Propriedade' },
    { type: 'Direito Constitucional' },
    { type: 'Direito da Família' },
    { type: 'Direito Internacional' },
  ]

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
          options={advType}
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
      <div className="card card__advogado card__two grid m-2">
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
          <span className="ml-1">{lawyer.numReviews} avaliações</span>
        </div>
        <div className="about text-justify p-1">{lawyer.about}</div>
        <button id="read_button">Ler mais</button>
      </div>
    )
  }

  // const listTemplate = (items: any[]) => {
  //   if (!items || items.length === 0) return null

  //   let list = items.map((lawyers) => {
  //     return itemTemplate(lawyers)
  //   })

  //   return <div className="grid grid-nogutter">{list}</div>
  // }

  return (
    <div className="card mt-8">
      <DataView
        value={data}
        itemTemplate={itemTemplate}
        paginator
        rows={2}
        header={header()}
        sortField={sortField}
        sortOrder={sortOrder}
      />
    </div>
  )
}
