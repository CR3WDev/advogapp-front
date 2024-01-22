import { getI18n } from '@utils/hooks/useGetI18n';
import { Toast, ToastProps } from 'primereact/toast';
import { useEffect, useRef } from 'react';

let getToastRef: ToastProps | any;
const GlobalToast = () => {
	const toast = useRef<ToastProps | any>();

	useEffect(() => {
		getToastRef = toast;
	}, []);

	return <Toast ref={toast} />;
};
const showToastError = (message: string, title?: string) => {
	if (getToastRef.current)
		getToastRef.current.show({
			severity: 'error',
			summary: title || getI18n('error'),
			detail: message,
		});
};
const showToastSuccess = (message: string, title?: string) => {
	if (getToastRef)
		getToastRef.current.show({
			severity: 'success',
			summary: title || getI18n('success'),
			detail: message,
		});
};

const showToastWarn = (message: string, title?: string) => {
	if (getToastRef)
		getToastRef.current.show({
			severity: 'warn',
			summary: title || getI18n('warn'),
			detail: message,
		});
};
const showToastInfo = (message: string, title?: string) => {
	if (getToastRef)
		getToastRef.current.show({
			severity: 'info',
			summary: title || getI18n('info'),
			detail: message,
		});
};
export {
	GlobalToast,
	getToastRef,
	showToastError,
	showToastInfo,
	showToastSuccess,
	showToastWarn,
};
