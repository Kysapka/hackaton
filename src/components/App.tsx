import React, { useState } from 'react';
import { Decor } from './Decor/Decor';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Content } from './Content/Content';
import { Main } from './Content/Inner/Main/Main';

export const App = () => {
	const [ initPage, setInitPage ] = useState(false);

	const onClickHandler = () => setInitPage(true);

	return (
		<div className="wrapper">
			{
				initPage ? <Content>
					<Main />
				</Content>
					:
					<NavLink className="start-button" to="/index" onClick={onClickHandler}>Start Magic</NavLink>
			}
			<Decor />
		</div>
	);
};
