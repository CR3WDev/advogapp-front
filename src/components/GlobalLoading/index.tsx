import { ProgressSpinner } from 'primereact/progressspinner';
import { useIsFetching, useIsMutating } from 'react-query';
import './style.scss';

export const GlobalLoalding = () => {
	const excludedQueryKeys: string[] = [];
	const excludedMutationsKeys: string[] = [];

	let sum =
		useIsFetching({
			predicate: (key: any) =>
				!excludedQueryKeys.includes(key?.queryKey[0].toString()),
		}) +
		useIsMutating({
			predicate: (key: any) =>
				!excludedMutationsKeys.includes(
					key?.options?.mutationKey[0].toString()
				),
		});

	const isLoading = sum;

	return (
		<div
			style={{ zIndex: 9999999999999999 }}
			className={`globalLoading ${
				!isLoading ? 'hidden' : 'flex justify-content-center align-items-center'
			} `}
		>
			<div className="flex justify-content-center align-content-center p-2 ">
				<ProgressSpinner />
			</div>
		</div>
	);
};
