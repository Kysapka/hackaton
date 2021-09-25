import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { publicRoutes } from '../../utils/routes';

export const Content: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
			{
				publicRoutes.map(({path, Component}) =>
					<Route key={ path } path={ path } component={ Component } exact  />
				)
			}
		</BrowserRouter>
	);
};