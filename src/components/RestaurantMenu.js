import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { IMG_CDN_URL } from '../contants';

const RestaurantMenu = () => {
	const { id } = useParams();
	/**
	 * Here setting initial value to `null` and not to `{}` because if it is {}, then it references to the same object
	 * and it does not re render when the value updated for `{}`.
	 * If it null, as it is primitive data type, it will re-render when the value changes.
	 */
	const [menuItem, setMenuItems] = useState(null);
	useEffect(() => {
		fetchMenuDetails();
	}, []);
	async function fetchMenuDetails() {
		const data = await fetch(
			'https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=' +
				id
		);

		const json = await data.json();
		setMenuItems(json.data);
		// console.log('JSOn', Object.values(json.data?.menu?.items));
	}

	// if (!menuItem) return;
	console.log('Render in menu');
	return !menuItem ? (
		<Shimmer />
	) : (
		<>
			<div className="restaurant-details">
				<div className="restaurant-info">
					<h1> Restaurant id: {menuItem.id}</h1>
					<h2> Restaurant name: {menuItem.name}</h2>
					<img src={IMG_CDN_URL + menuItem.cloudinaryImageId} />
				</div>
				<div className="restaurant-menu">
					<h1>Menu Items:</h1>
					<ul>
						{/* {console.log(menuItem.menu.items)} */}
						{Object.values(menuItem.menu.items).map((u) => (
							<li key={u.id}>{u.name}</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default RestaurantMenu;
