import React from 'react'
import { Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignPage from '../pages/SignPage'
import App from '../App'

const routes = (
    <div>
        <Route exact path='/' component={App}></Route>
        <Route path='/sign' component={SignPage}></Route>
        <Route path='/login' component={LoginPage}></Route>
    </div>
)

export default routes