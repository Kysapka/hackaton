import React from 'react';
import { Header } from './Inner/Header/Header';
import { Main } from './Inner/Main/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import { MagicRating } from '../MagicRating/MagicRating';
import { DoneDreams } from '../DoneDreams/DoneDreams';
import { Events } from '../Events/Events';

export const Content: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<Route path="/index" component={ Main } />
			<Route path="/magic-rating" component={ MagicRating } />
			<Route path="/done-dreams" component={ DoneDreams } />
			<Route path="/events" component={ Events } />
		</BrowserRouter>
	);
};