import React from 'react';
import { Menu } from './Menu/Menu';

export const Header: React.FC = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<Menu />
				</div>
			</div>
		</header>
	);
};