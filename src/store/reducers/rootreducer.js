import authReducer from './authreducer'
import storyReducer from './storyreducer'
import { combineReducers } from 'redux'
import {firestoreReducer } from 'redux-firestore'
import {firebaseReducer } from 'react-redux-firebase'
//combines the reducers to create a root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  story: storyReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer

// the key name will be the data property on the state object
