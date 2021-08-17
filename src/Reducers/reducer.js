import { combineReducers } from 'redux';

const user = {};
const error = '';
const itemsInitialState = {
  items: [],
};

function userReducer(state = user, action) {
  switch (action.type) {
    case 'LOGIN':
      console.log(action)
      return action.user;
    default:
      return state;
  }
}

function errorReducer(state = error, action) {
  switch (action.type) {
    case 'ERROR':
      return action.error;
    default:
      return state;
  }
}

function addReducer(state = itemsInitialState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}

const reducers = {
  userReducer,
  errorReducer,
  addReducer,
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    localStorage.removeItem('token');
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
