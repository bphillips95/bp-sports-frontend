import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {createStore,combineReducers} from 'redux'
import articleReducer from './reducers/articleReducer';
import userReducer from './reducers/userReducer';
import tagReducer from './reducers/tagReducer'
import scoresReducer from './reducers/scoresReducer'
import AppHeader from './components/AppHeader'
import { BrowserRouter as Router} from "react-router-dom";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const rootReducer = combineReducers({
          articles: articleReducer,
          userInfo: userReducer,
          tags: tagReducer,
          scores: scoresReducer
        })
const store = createStore( rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

ReactDOM.render(
        <Provider store={store}>
                <Router>
                <Elements stripe={stripePromise}>
                <AppHeader/>
                <App />
                </Elements>
                </Router>
                </Provider>,
        document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
