import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB9Wj_K91ZnTqi_Cj31mgSKBh5WK2_6ZqQ',
  authDomain: 'd-react-client-panel.firebaseapp.com',
  databaseURL: 'https://d-react-client-panel.firebaseio.com',
  projectId: 'd-react-client-panel',
  storageBucket: 'd-react-client-panel.appspot.com',
  messagingSenderId: '854447044226',
  appId: '1:854447044226:web:3cece12f247c699140e69b',
  measurementId: 'G-E6XWR3SGZ1',
};

//react-redux firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

//Init firebase instance
firebase.initializeApp(firebaseConfig);

//Init firestore
const firestore = firebase.firestore();

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

// Create store with reducers and initial state
const initialState = {};
export const store = createStore(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
