import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { IMG_CDN_URL } from '../contants';
import useRestaurant from '../utils/useRestaurant';

const RestaurantMenu = () => {
	const { id } = useParams();

	const menuItem = useRestaurant(id);
	console.log('Menu', menuItem);
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
						{/* {Object.values(menuItem.data.items).map((u) => (
							<li key={u.id}>{u.name}</li>
						))} */}
					</ul>
				</div>
			</div>
		</>
	);
};

export default RestaurantMenu;
