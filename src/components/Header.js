import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';

const Title = () => (
	<a href="/">
		<img
			className="logo"
			alt="logo"
			src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
		/>
	</a>
);

const Header = () => {
	const { user } = useContext(UserContext);

	return (
		<div className="header">
			<Title />

			<div className="nav-items">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>Cart</li>
					<li>
						<Link to="/instamart">Instamrt</Link>
					</li>
				</ul>
			</div>

			<span>{user.name}</span>
		</div>
	);
};

export default Header;
