import { useState, useEffect } from 'react'
import { DataView } from 'primereact/dataview'
import { Rating } from 'primereact/rating'
import { mockAdv } from '../../utils/mock/index'
import imgUserDefault from '@assets/fotoUsuarioBase.png'
import './index.scss'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'

interface Lawyer {
  id: string
  name: string
  specialization: string
  rating: number
  numReviews: number
  about: string
}

export default function LawyerPagination() {
  const [lawyers, setLawyers] = useState<Lawyer[]>([])
  const [sortField, setSortField] = useState('')
  const [sortOrder, setSortOrder] = useState(0)
  const [sortKey, setSortKey] = useState('')

  useEffect(() => {
    setLawyers(mockAdv)
  }, [])

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
      <div>
        <Dropdown
          value={selectedAdv}
          onChange={(e) => setSelectedAdv(e.value)}
          options={advType}
          optionLabel="type"
          placeholder="Especialização"
          filter
          valueTemplate={selectedAdvTemplate}
          itemTemplate={advOptionTemplate}
          className="w-full md:w-14rem"
        />
        <span className="p-input-icon-right ml-2">
          <i className="pi pi-search" />
          <InputText placeholder="Pesquisa" />
        </span>
      </div>
    )
  }

  const itemTemplate = (lawyer: any) => {
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
            <h2 className="my-2">{lawyer.name} </h2>
            <span>{lawyer.specialization} </span>
          </div>
          <div className="max-width-sobre">{lawyer.about} </div>
        </div>
        <div className="ml-4 mr-8">
          <Rating value={lawyer.rating} readOnly cancel={false} className="mb-3" />
          <span className="ml-1">{lawyer.numReviews} avaliações</span>
        </div>
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
    <div className="card">
      <DataView
        value={lawyers}
        itemTemplate={itemTemplate}
        paginator
        rows={5}
        header={header()}
        sortField={sortField}
        sortOrder={sortOrder}
      />
    </div>
  )
}
