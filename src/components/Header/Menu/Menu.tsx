import React from 'react';
import { MenuItem } from './MenuItem/MenuItem';

export const Menu: React.FC = () => {
	return (
		<nav className="menu">
			<ul className="menu__list">
				<MenuItem text="Главная" link="/index" />
				<MenuItem text="Рейтинг волшебников" link="/index/magic-rating" />
				<MenuItem text="Исполненные мечты" link="/index/done-dreams" />
				<MenuItem text="Готовы провести мероприятие" link="/index/events" />
			</ul>
		</nav>
	);
};