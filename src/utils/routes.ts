import {
	MAGIC_RATING_ROUTE,
	DONE_DREAMS_ROUTE,
	EVENTS_ROUTE,
	INDEX_ROUTE, START_ROUTE,
} from './consts';

import { MagicRating } from '../components/MagicRating/MagicRating';
import { DoneDreams } from '../components/DoneDreams/DoneDreams';
import { Events } from '../components/Events/Events';
import { Main } from '../components/Main/Main';
import { Start } from '../pages/Start/Start';
import { Content } from '../pages/Content/Content';

export const publicRoutes = [
	{
		path: INDEX_ROUTE,
		Component: Main,
	},
	{
		path: MAGIC_RATING_ROUTE,
		Component: MagicRating,
	},
	{
		path: DONE_DREAMS_ROUTE,
		Component: DoneDreams,
	},
	{
		path: EVENTS_ROUTE,
		Component: Events,
	},
];

export const privateRoutes = [
	{
		path: START_ROUTE,
		Component: Start,
		exact: true,
	},
	{
		path: INDEX_ROUTE,
		Component: Content,
		exact: false,
	},
];