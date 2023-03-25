import { restaurantList } from '../contants';
import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useOnline from '../utils/useOnline';

const Body = () => {
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [searchText, setSearchText] = useState('');

	/**
	 * first component renders then useEffect is called.
	 * empty dependency array => once after initial render
	 * dep array [searchText] => once after initial render + everytime after render (searchText changes)
	 * Called after the component is rendered
	 * if there is no dependency array, then useEffect is called after each render
	 */
	useEffect(() => {
		getRestaurantList();
	}, []);

	async function getRestaurantList() {
		const data = await fetch(
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
		);
		const json = await data.json();
		setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
		setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
	}

	const isOnline = useOnline();

	if (!isOnline) {
		return <h1> 🔴 Oops! Something is wrong with you internet connection</h1>;
	}

	return allRestaurants?.length === 0 ? (
		<Shimmer />
	) : (
		<>
			<div className="search-container">
				<input
					type="text"
					className="search-input"
					placeholder="Search"
					value={searchText}
					onChange={(e) => {
						setSearchText(e.target.value);
					}}
				/>
				<button
					className="search-btn"
					onClick={() => {
						//need to filter the data
						const data = filterData(searchText, allRestaurants);
						// update the state - restaurants
						setFilteredRestaurants(data);
					}}
				>
					Search
				</button>
			</div>
			<div className="restaurant-list">
				{filteredRestaurants?.length ? (
					filteredRestaurants.map((restaurant) => {
						return (
							<Link
								key={restaurant.data.id}
								to={`/restaurant/${restaurant.data.id}`}
							>
								<RestaurantCard {...restaurant.data} />
							</Link>
						);
					})
				) : (
					<h1>No Filtered Restaurants</h1>
				)}
			</div>
		</>
	);
};

export default Body;
