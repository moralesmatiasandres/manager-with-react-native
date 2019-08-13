import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
    componentDidMount() {
        const config = {
            apiKey: 'AIzaSyB9xkyI5_WAnnM3CQTZLhPUUCiKKqXsfLw',
            authDomain: 'manager-5a7a5.firebaseapp.com',
            databaseURL: 'https://manager-5a7a5.firebaseio.com',
            projectId: 'manager-5a7a5',
            storageBucket: 'manager-5a7a5.appspot.com',
            messagingSenderId: '789984653987'
          };
    firebase.initializeApp(config);
    }
    render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
          <Provider store={store}>
              <Router />
          </Provider>
        );
    }
}
export default App;
