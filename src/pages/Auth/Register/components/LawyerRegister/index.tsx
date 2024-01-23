import { showToastSuccess } from '@components/GlobalToast'
import { getFormErrorMessage } from '@utils/hooks/useGetFormErrorMessage'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Steps } from 'primereact/steps'
import { classNames } from 'primereact/utils'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const LawyerRegister = () => {
  // const registerI18n = getI18n('register')
  const [activeIndex, setActiveIndex] = useState(0)
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()
  const items = [
    {
      label: 'Dados Pessoais',
    },
    {
      label: 'Endereço',
    },
  ]
  const onSubmit = () => {
    console.log('entrou')
  }
  return (
    <div style={{ minWidth: '500px' }}>
      <Steps
        model={items}
        className="mb-3"
        activeIndex={activeIndex}
        onSelect={(e) => setActiveIndex(e.index)}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={activeIndex !== 0 ? 'hidden' : ''}>
          <div className="mb-2">
            <InputText
              className={classNames({
                'p-invalid': errors.nome,
              })}
              style={{ width: '100%' }}
              placeholder={'Nome completo'}
              id="nome"
              {...register('nome', {
                required: true,
              })}
            />
            {getFormErrorMessage(errors.nome)}
          </div>
          <div className="mb-2">
            <InputText
              className={classNames({
                'p-invalid': errors.nome,
              })}
              style={{ width: '100%' }}
              placeholder={'Email'}
              id="nome"
              {...register('nome', {
                required: true,
              })}
            />
            {getFormErrorMessage(errors.nome)}
          </div>
          <div className="flex">
            <div className="mb-2 mr-1">
              <InputText
                className={classNames({
                  'p-invalid': errors.nome,
                })}
                style={{ width: '100%' }}
                placeholder={'CPF'}
                id="nome"
                {...register('nome', {
                  required: true,
                })}
              />
              {getFormErrorMessage(errors.nome)}
            </div>
            <div className="mb-2 ml-1">
              <InputText
                className={classNames({
                  'p-invalid': errors.nome,
                })}
                style={{ width: '100%' }}
                placeholder={'OAB'}
                id="nome"
                {...register('nome', {
                  required: true,
                })}
              />
              {getFormErrorMessage(errors.nome)}
            </div>
          </div>
          <div className="mb-2">
            <InputText
              className={classNames({
                'p-invalid': errors.nome,
              })}
              style={{ width: '100%' }}
              placeholder={'Data Nascimento'}
              id="nome"
              {...register('nome', {
                required: true,
              })}
            />
            {getFormErrorMessage(errors.nome)}
          </div>
          <div className="mb-2">
            <InputText
              className={classNames({
                'p-invalid': errors.nome,
              })}
              style={{ width: '100%' }}
              placeholder={'Senha'}
              id="nome"
              {...register('nome', {
                required: true,
              })}
            />
            {getFormErrorMessage(errors.nome)}
          </div>
          <div className="mb-2">
            <InputText
              className={classNames({
                'p-invalid': errors.nome,
              })}
              style={{ width: '100%' }}
              placeholder={'Confirmar Senha'}
              id="nome"
              {...register('nome', {
                required: true,
              })}
            />
            {getFormErrorMessage(errors.nome)}
          </div>
        </div>
        <div className={activeIndex !== 1 ? 'hidden' : ''}>
          <div className="flex">
            <div className="mb-2 mr-1">
              <InputText
                className={classNames({
                  'p-invalid': errors.nome,
                })}
                style={{ width: '100%' }}
                placeholder={'CEP'}
                id="nome"
                {...register('nome', {
                  required: true,
                })}
              />
              {getFormErrorMessage(errors.nome)}
            </div>
            <div className="mb-2 ml-1">
              <InputText
                className={classNames({
                  'p-invalid': errors.nome,
                })}
                style={{ width: '100%' }}
                placeholder={'Número'}
                id="nome"
                {...register('nome', {
                  required: true,
                })}
              />
              {getFormErrorMessage(errors.nome)}
            </div>
          </div>
          <div className="mb-2">
            <InputText
              className={classNames({
                'p-invalid': errors.nome,
              })}
              style={{ width: '100%' }}
              placeholder={'Logradouro'}
              id="nome"
              {...register('nome', {
                required: true,
              })}
            />
            {getFormErrorMessage(errors.nome)}
          </div>
          <div className="flex">
            <div className="mb-2 mr-1">
              <InputText
                className={classNames({
                  'p-invalid': errors.nome,
                })}
                style={{ width: '100%' }}
                placeholder={'Cidade'}
                id="nome"
                {...register('nome', {
                  required: true,
                })}
              />
              {getFormErrorMessage(errors.nome)}
            </div>
            <div className="mb-2 ml-1">
              <InputText
                className={classNames({
                  'p-invalid': errors.nome,
                })}
                style={{ width: '100%' }}
                placeholder={'Estado'}
                id="nome"
                {...register('nome', {
                  required: true,
                })}
              />
              {getFormErrorMessage(errors.nome)}
            </div>
          </div>

          <div className="mb-2">
            <InputText
              className={classNames({
                'p-invalid': errors.nome,
              })}
              style={{ width: '100%' }}
              placeholder={'Complemento'}
              id="nome"
              {...register('nome', {
                required: true,
              })}
            />
            {getFormErrorMessage(errors.nome)}
          </div>
        </div>
        <div className="flex justify-content-between">
          <div>
            <Button
              type="button"
              label="Voltar"
              onClick={() => {
                setActiveIndex((prev) => prev - 1)
              }}
            ></Button>
          </div>
          <div>
            <Button
              type="button"
              label={activeIndex === 1 ? 'Concluído' : 'Próximo'}
              onClick={() => {
                if (activeIndex === 0) {
                  setActiveIndex((prev) => prev + 1)
                } else {
                  showToastSuccess('Usuário Cadastrado com Sucesso!')
                  navigate('/login')
                }
              }}
            ></Button>
          </div>
        </div>
      </form>
    </div>
  )
}
