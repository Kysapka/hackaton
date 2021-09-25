import React, { useState } from 'react';
import { Decor } from './Decor/Decor';
import { Route } from 'react-router-dom';
import { privateRoutes } from '../utils/routes';

export const App = () => {
	return (
		<div className="wrapper">
			<Decor />
			{
				privateRoutes.map(({path, Component, exact}) =>
					<Route key={ path } path={ path } component={ Component } exact={ exact } />
				)
			}
		</div>
	);
};
