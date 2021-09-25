import React from 'react';
import { NavLink } from 'react-router-dom';

export const LeftSide = () => {
	return (
		<section className="main-content__left">
			<NavLink className="main-content__button" to="/index/dream">Хочу найти себя</NavLink>
		</section>
	);
};