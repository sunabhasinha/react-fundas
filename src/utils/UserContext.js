import { createContext } from 'react';

const UserContext = createContext({
	user: {
		name: 'Dummy Name',
		email: 'dummy@gmail.com',
	},
});
/** This is a name which we can give to our context and it becomes easy to debug in our react dev tools */
UserContext.displayName = 'UserContext';
export default UserContext;
