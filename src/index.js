import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserContextProvider } from './contactComp/context/userContext';



ReactDOM.render( 
  <React.StrictMode>
    <UserContextProvider>
      <App /> 
    </UserContextProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);
