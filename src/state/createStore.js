import { createStore as reduxCreateStore } from 'redux';
import reducer from './reducer';

const initialState = {
  isLoggedIn: false,
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
