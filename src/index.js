/*********************************************************************************
 * *  WEB422 – Assignment 3
 * *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
 * *  No part of this assignment has been copied manually or electronically from any other source
 * *  (including web sites) or distributed to other students.
 * * 
 * *  Name: Wonkeun No   Student ID: 145095196   Date: Oct 15, 2021
 * *
 * *
 * ********************************************************************************/
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render( <
    React.StrictMode >
    <
    BrowserRouter >
    <
    App / >
    <
    /BrowserRouter> <
    /React.StrictMode>,
    document.getElementById('root')
);