import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import {App} from './components/App';
import {BrowserRouter} from "react-router-dom";

import  {DonorForm} from "./components/DonorForm/DonorForm";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
    ,
    document.getElementById('root'),
);