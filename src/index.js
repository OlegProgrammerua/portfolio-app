import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import videoReducer from './store/videoReducer'
import GearReducer from './store/GearReducer';
import contactReducer from './store/contactReducer';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const store = configureStore({
  reducer:{
    video:videoReducer,
    gear:GearReducer,
    contacts:contactReducer

  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);


