type ToastSeverity = 'error' | 'success' | 'info' | 'warn';
export const useToast = (string: ToastSeverity, message: string) => {
	console.log(string, message);
};
