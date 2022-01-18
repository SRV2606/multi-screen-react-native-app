import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
