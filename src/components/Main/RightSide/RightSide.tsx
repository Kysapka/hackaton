import React from 'react';
import { NavLink } from 'react-router-dom';

export const RightSide: React.FC = () => {
	return (
		<section className="main-content__right">
			<NavLink to="/index/donor">Хочу исполнить мечту</NavLink>
		</section>
	);
};