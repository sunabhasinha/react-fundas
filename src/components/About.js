import { Outlet } from 'react-router-dom';

const About = () => {
	return (
		<div>
			<h1>About Us Page</h1>
			<Outlet />
		</div>
	);
};

export default About;
