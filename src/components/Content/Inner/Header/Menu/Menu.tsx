import React from 'react';
import { MenuItem } from './MenuItem/MenuItem';

export const Menu: React.FC = () => {
	return (
		<nav className="menu">
			<ul className="menu__list">
				<MenuItem text="Главная" link="/index" />
				<MenuItem text="Рейтинг волшебников" link="/magic-rating" />
				<MenuItem text="Исполненные мечты" link="/done-dreams" />
				<MenuItem text="Готовы провести мероприятие" link="events" />
			</ul>
		</nav>
	);
};