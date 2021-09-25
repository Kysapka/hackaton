import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import {App} from './components/App';
import {BrowserRouter} from "react-router-dom";
import 'firebase/firestore';
import 'firebase/auth';
import firebase from "firebase/compat";
import {ProfileMagic} from "./ProfileMagic/ProfileMagic";


// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyC-F1shJkvil8yCHUtaR1b0orZx-tgmhr8",
    authDomain: "samurai-hakaton.firebaseapp.com",
    projectId: "samurai-hakaton",
    storageBucket: "samurai-hakaton.appspot.com",
    messagingSenderId: "617296447642",
    appId: "1:617296447642:web:9e00ef2977d0aafdb37723",
    measurementId: "G-CNMM1D2R23"
});

export const Context = createContext({})

const auth = firebase.auth()
const firestore = firebase.firestore


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Context.Provider value={{
                firebase,
                auth,
                firestore
            }}>
                <ProfileMagic/>
            {/*<App/>*/}
            </Context.Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);