import React from 'react';
import ReactDOM from 'react-dom';
import routes from './router/routes'
import { BrowserRouter as Router } from 'react-router-dom'
import NavComponent from './pages/NavComponent'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"
import addUser from './reducers/userReducer'

const store = createStore(addUser, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <NavComponent />
            {routes}
        </Router>
    </Provider>

), document.getElementById('root'))

