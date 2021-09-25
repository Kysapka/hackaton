import React from 'react';
import { LeftSide } from './LeftSide/LeftSide';
import { RightSide } from './RightSide/RightSide';
import { NavLink } from 'react-router-dom';

export const Main: React.FC = () => {
	return (
		<main className="main-content">
			<NavLink className="main-content__button" to="/index/dream">Хочу найти себя</NavLink>
			<NavLink className="main-content__button" to="/index/donor">Хочу помочь</NavLink>
		</main>
	);
};