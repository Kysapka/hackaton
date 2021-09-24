import React from 'react';
import { Decor } from './Decor/Decor';
import { StartButton } from './StartButton/StartButton';

export const App = () => {
	return (
      <div className="wrapper">
	      <Decor />
	      <StartButton />
      </div>
	);
};
