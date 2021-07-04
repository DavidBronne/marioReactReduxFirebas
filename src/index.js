import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider, useSelector} from 'react-redux';
//store enhancers
import thunk from 'redux-thunk';
import {createFirestoreInstance, reduxFirestore, getFirestore} from 'redux-firestore'
import {ReactReduxFirebaseProvider, reactReduxFirebase, getFirebase, isLoaded} from 'react-redux-firebase'
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app'

/* const store = createStore(rootReducer, 
  compose (
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
); */

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    /* reactReduxFirebase(fbConfig), // redux binding for firebase */
    reduxFirestore(firebase, fbConfig) // redux bindings for firestore
  )
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

const rrfProps = {
  firebase,
  config: rrfConfig, fbConfig, 
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="center">Loading...</div>;
  return children
}


  ReactDOM.render(
    <React.StrictMode>
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );




  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
