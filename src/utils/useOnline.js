import { useEffect, useState } from 'react';

const useOnline = () => {
	const [isOnline, setIsOnline] = useState(true);

	useEffect(() => {
		const handleOnline = () => {
			console.log('in true');
			setIsOnline(true);
		};
		const handleOffline = () => {
			console.log('in false');
			setIsOnline(false);
		};
		console.log('in useEffect');
		window.addEventListener('online', handleOnline);
		window.addEventListener('offline', handleOffline);

		return () => {
			window.removeEventListener('online', handleOnline);
			window.removeEventListener('offline', handleOffline);
		};
	}, []);

	return isOnline;
};

export default useOnline;
