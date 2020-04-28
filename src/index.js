import React from 'react';
import ReactDOM from 'react-dom';
import routes from './router/routes'
//import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
//import { Link } from 'react-router-dom'
import NavComponent from './pages/NavComponent'
//import LoginPage from './pages/LoginPage'
//import SignPage from './pages/SignPage'
//import App from './App'

ReactDOM.render((
    <div>
        <Router>
            <NavComponent />
            {routes}
        </Router>
    </div>

), document.getElementById('root'))

