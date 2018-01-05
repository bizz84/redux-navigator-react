import { combineReducers } from 'redux';
import { AppNavigator } from '../components/AppNavigator';

const mainAction = AppNavigator.router.getActionForPathAndParams('Main');

const initialState = AppNavigator.router.getStateForAction(mainAction);

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

const AppReducer = combineReducers({
  nav: navReducer,
});

export default AppReducer;