import React from 'react';

interface IButton {
	text: string;
}

export const Button: React.FC<IButton> = ({text}) => {
	return (
		<button className="main-content__button">{text}</button>
	);
};