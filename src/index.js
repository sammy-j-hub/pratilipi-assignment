import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootreducer'
import { Provider  } from 'react-redux'
import thunk from 'redux-thunk'

import {reduxFirestore, getFirestore } from 'redux-firestore'
import {reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase from './Component/config/fbConfig'


const middleware = [
  thunk.withExtraArgument({ getFirebase, getFirestore }),
  // This is where you add other middleware like redux-observable
];

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(...middleware),
    reactReduxFirebase(firebase, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true}), // redux binding for firebase
    reduxFirestore(firebase) // redux bindings for firestore
    ),
);



store.firebaseAuthIsReady.then(() => {
ReactDOM.render(
  <Provider store={store}>
        <App />
    </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
});