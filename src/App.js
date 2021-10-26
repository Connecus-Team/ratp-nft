import React from 'react';
import {Suspense, useEffect} from 'react';
import {Provider} from 'react-redux';
import {configStore, getHistory} from './store/config';
import {ConnectedRouter} from 'connected-react-router';
import RoutesComponent from './routes/RoutesComponent';
import Loading from './components/Loading';

const store = configStore();
const App = () => {
  return (
    <div className="rapt-nft">
      <Suspense fallback={<Loading type={'spokesars'} color={'black'} />}>
        <Provider store={store}>
          <ConnectedRouter history={getHistory()}>
            <RoutesComponent />
          </ConnectedRouter>
        </Provider>
      </Suspense>
    </div>
  );
};
export default App;
