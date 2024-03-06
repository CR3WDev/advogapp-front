import { getI18n } from '@utils/hooks/useGetI18n.ts'

type ErrorMessageProps = {
  errors: any
}
export const ErrorMessageComponent = ({ errors }: ErrorMessageProps) => {
  if (!errors) return
  if (errors?.type === 'required') {
    return <span className="p-error">{getI18n('required_field')}</span>
  }
  if (errors.type === 'validate') {
    return <span className="p-error">{errors.message}</span>
  }
}
