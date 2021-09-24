import React from 'react';
import { LeftSide } from './LeftSide/LeftSide';
import { RightSide } from './RightSide/RightSide';

export const Main: React.FC = () => {
	return (
		<main className="main-content">
			<LeftSide />
			<RightSide />
		</main>
	);
};