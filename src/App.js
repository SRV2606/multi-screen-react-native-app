import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {initializeApp} from 'firebase/app';

class App extends Component {
  componentWillMount() {
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
        <View>
          <Text>Heeloo!!!!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
