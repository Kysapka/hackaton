import React from 'react';
import { NavLink } from 'react-router-dom';

export const LeftSide = () => {
	return (
		<section className="main-content__left">
			<NavLink to="/index/dream">Хочу осуществить мечту</NavLink>
		</section>
	);
};