import { useState, useEffect } from 'react'
import { DataView } from 'primereact/dataview'
import { Rating } from 'primereact/rating'
import { mockAdv } from '../../utils/mock/index'
import imgUserDefault from '@assets/fotoUsuarioBase.png'
import './index.scss'

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

  useEffect(() => {
    setLawyers(mockAdv)
  }, [])

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

  const listTemplate = (items: any[]) => {
    if (!items || items.length === 0) return null

    let list = items.map((lawyers) => {
      return itemTemplate(lawyers)
    })

    return <div className="grid grid-nogutter">{list}</div>
  }

  return (
    <div className="card">
      <DataView value={lawyers} itemTemplate={itemTemplate} paginator rows={5} />
    </div>
  )
}
