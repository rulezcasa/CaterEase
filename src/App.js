import React from 'react';
import './App.css';
import Navigation from './navigation';
import { Authprovider } from './contexts/authContext';

function App() {
  return (
    <div className="App">
      <Authprovider> {/* Wrap the Navigation with AuthProvider */}
        <Navigation />
      </Authprovider>
    </div>
  );
}

export default App;
