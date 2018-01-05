import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../components/AppNavigator';

const mainAction = AppNavigator.router.getActionForPathAndParams('Main');

const initialState = AppNavigator.router.getStateForAction(mainAction);

const navReducer = (state = initialState, action) => {
    console.log(action);
    let nextState;
    switch (action.type) {
    case 'ChooseColor':
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'ChooseColor' }),
            state
          );
        break;
    case 'ChooseColorDismiss':
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.back({ routeName: 'Main' }),
            state
        );
        break;
    default:
        nextState = AppNavigator.router.getStateForAction(action, state);
        break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

const AppReducer = combineReducers({
  nav: navReducer,
});

export default AppReducer;