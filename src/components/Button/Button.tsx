import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { NavLink } from 'react-router-dom';

type DefaultPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface IButton extends DefaultPropsType {
	text: string;
	link: string;
}

export const Button: React.FC<IButton> = ({text, link}) => {
	return (
		<NavLink className="main-content__button" to={link}>{text}</NavLink>
	);
};