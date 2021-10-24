import React from 'react';
import {Suspense, useEffect} from 'react';
import {Provider} from 'react-redux';
import {configStore, getHistory} from './store/config';
import {ConnectedRouter} from 'connected-react-router';

const App = () => (
  <div>
    Hello, Webpack! as
  </div>
);
export default App;
