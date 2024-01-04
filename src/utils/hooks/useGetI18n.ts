import { localeOption } from 'primereact/api';

export function getI18n(key: string) {
	return localeOption(key, 'pt');
}
