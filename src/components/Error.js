import { useRouteError } from 'react-router-dom';

const Error = () => {
	const { status, statusText } = useRouteError();
	return (
		<div>
			<h1>OOps!!</h1>
			<p>Something went wrong!</p>
			<h2>{status + ' : ' + statusText}</h2>
		</div>
	);
};

export default Error;
