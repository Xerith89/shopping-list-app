import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar';
import ItemList from './components/ItemList';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <ItemList/>
      </div>
    </Provider>
  );
}

export default App;
