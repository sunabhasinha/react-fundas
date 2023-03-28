import { useState } from 'react';

const Section = ({ title, description, isVisible, setIsVisible }) => {
	return (
		<>
			<div className="m-2 p-2 border border-black">
				{isVisible && (
					<div>
						<h1 className="font-bold text-3xl">{title}</h1>
						<p className="text-lg">{description}</p>
					</div>
				)}
				{!isVisible ? (
					<button
						onClick={() => setIsVisible(true)}
						className="rounded-md cursor-pointer text-cyan-50 bg-green-600 m-2 p-2"
					>
						Show
					</button>
				) : (
					<button
						onClick={() => setIsVisible(false)}
						className="rounded-md cursor-pointer text-cyan-50 bg-red-600 m-2 p-2"
					>
						Hide
					</button>
				)}
			</div>
		</>
	);
};

const Instamart = () => {
	const [visibleSection, setVisibleSection] = useState('about');
	return (
		<>
			<Section
				title={'About'}
				description={
					'"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"'
				}
				isVisible={visibleSection === 'about'}
				setIsVisible={(e) => {
					setVisibleSection(e && 'about');
				}}
			/>
			<Section
				title={'Team Instamart'}
				description={
					'"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"'
				}
				isVisible={visibleSection === 'team'}
				setIsVisible={(e) => setVisibleSection(e && 'team')}
			/>
			<Section
				title={'Career Instamart'}
				description={
					'"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"'
				}
				isVisible={visibleSection === 'career'}
				setIsVisible={(e) => setVisibleSection(e && 'career')}
			/>
		</>
	);
};

export default Instamart;
