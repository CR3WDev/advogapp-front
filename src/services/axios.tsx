import axios from 'axios';

export const BaseURL = import.meta.env.VITE_BASE_URL;
const timeout = 1000 * 10;

export const api = axios.create({
	baseURL: BaseURL,
	headers: {
		'Content-Type': 'application/json',
		accept: '*/*',
	},
	timeout: timeout,
});
