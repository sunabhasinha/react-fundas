import { useState, useEffect } from 'react';

const useRestaurant = (resId) => {
	/**
	 * Here setting initial value to `null` and not to `{}` because if it is {}, then it references to the same object
	 * and it does not re render when the value updated for `{}`.
	 * If it null, as it is primitive data type, it will re-render when the value changes.
	 */
	const [menu, setMenu] = useState(null);
	useEffect(() => {
		fetchMenuDetails();
	}, []);
	async function fetchMenuDetails() {
		const data = await fetch(
			`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&submitAction=ENTER`
		);

		const json = await data.json();
		setMenu(json.data);
		// console.log('JSOn', Object.values(json.data?.menu?.items));
	}

	return menu;
};

export default useRestaurant;
