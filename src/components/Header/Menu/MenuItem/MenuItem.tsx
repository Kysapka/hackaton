import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import home from '../../../../assets/images/home.svg';

interface IMenuItem {
	text?: string;
	link: string;
}

export const MenuItem: React.FC<IMenuItem> = ({text, link}) => {
	return (
		<li className="menu__item">
			<NavLink className="menu__link" to={ link } exact>
				{ text ? text : <img className="menu__image" src={ home } alt="Home" /> }
			</NavLink>
		</li>
	);
};