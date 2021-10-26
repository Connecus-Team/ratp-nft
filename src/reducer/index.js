import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import banner from '../components/Banner/redux/Banner.Reducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    banner,
  });
