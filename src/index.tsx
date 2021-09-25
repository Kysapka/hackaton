import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import {App} from './components/App';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import  {DonorForm} from "./components/DonorForm/DonorForm";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <DonorForm/>
            {/*<App/>*/}
        </BrowserRouter>
    </React.StrictMode>
    ,
    document.getElementById('root'),
);