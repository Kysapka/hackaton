import React from 'react';
import { NavLink } from 'react-router-dom';

export const Start: React.FC = () => {
	return (
		<NavLink className="start-button" to="/index">Start Magic</NavLink>
	);
};