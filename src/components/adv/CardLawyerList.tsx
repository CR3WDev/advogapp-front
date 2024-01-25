import { mockAdv } from '@utils/mock/index'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'
import { DataView, DataViewLayoutOptions } from 'primereact/dataview'
import { LawyerItem } from './LawyerItem'

export const CardLawyerList = () => {
  const [selectedAdv, setSelectedAdv] = useState(null)
  const advType = [
    { type: 'Cível' },
    { type: 'Trabalhista' },
    { type: 'Imobiliário' },
    { type: 'Ambientalista' },
    { type: 'Do consumidor' },
    { type: 'Criminalista' },
    { type: 'Previdenciário' },
    { type: 'Digital' },
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

  return (
    <div>
      <div className="my-6">
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
      <div>
        <DataView value={mockAdv} itemTemplate={LawyerItem} paginator rows={5} />
      </div>
    </div>
  )
}