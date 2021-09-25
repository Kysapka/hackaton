import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {Context} from "../../../index";
import firebase from "firebase/compat"

// Анонимный вариант входа:
// const loginAn = () => {
// 	const {user} =   auth.signInAnonymously()
// }

export const RightSide: React.FC = () => {

	const {auth} = useContext<any>(Context)

	const login = async () => {
		const provider = new firebase.auth.GoogleAuthProvider()
		const {user} =  await auth.signInWithPopup(provider)
	}

	return (
		<section className="main-content__right">
			<NavLink to="/index/donor" onClick={login}>Хочу исполнить мечту</NavLink>
		</section>
	);
};