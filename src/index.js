import React from 'react';
import ReactDOM from 'react-dom';
import routes from './router/routes'
import { BrowserRouter as Router } from 'react-router-dom'
import NavComponent from './pages/NavComponent'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import addUser from './reducers/userReducer'

const store = createStore(addUser)

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <NavComponent />
            {routes}
        </Router>
    </Provider>

), document.getElementById('root'))

