import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import {initializeApp} from 'firebase/app';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCH7WrtJSLaj2SlrRigY2-5PWIYBGxjJBs',
      authDomain: 'employee-manager-54c3b.firebaseapp.com',
      projectId: 'employee-manager-54c3b',
      storageBucket: 'employee-manager-54c3b.appspot.com',
      messagingSenderId: '341718826792',
      appId: '1:341718826792:web:21f11ef0eca99737c0da1d',
      measurementId: 'G-WVKL30FLG6',
    };
    initializeApp(firebaseConfig);
  }
  render() {
    const middleware = applyMiddleware(
      reduxPromiseMiddleware,
      reduxThunk,
      logger,
    );
    const store = createStore(reducers, {}, middleware);
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
