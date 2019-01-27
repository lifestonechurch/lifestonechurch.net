import { createStore as reduxCreateStore } from 'redux';
import reducer from './reducer';

const initialState = {
  isLoggedIn: true,
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
