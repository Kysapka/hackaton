import React from 'react';
import { NavLink } from 'react-router-dom';

interface IMenuItem {
	text: string;
	link: string;
}

export const MenuItem: React.FC<IMenuItem> = ({text, link}) => {
	return (
		<li className="menu__item">
			<NavLink className="menu__link" to={link}>{text}</NavLink>
		</li>

	);
};