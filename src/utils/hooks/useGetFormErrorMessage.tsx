import { getI18n } from './useGetI18n';

export const getFormErrorMessage = (errors: any) => {
	if (!errors) return;
	if (errors?.type === 'required') {
		return <span className="p-error">{getI18n('required_field')}</span>;
	}
};
