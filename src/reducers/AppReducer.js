import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../components/AppNavigator';

const router = AppNavigator.router;

const mainAction = router.getActionForPathAndParams('Main');

const initialState = router.getStateForAction(mainAction);

const navReducer = (state = initialState, action) => {
    console.log(action);
    let nextState;
    switch (action.type) {
    case 'ChooseColor':
        nextState = router.getStateForAction(
            NavigationActions.navigate({ routeName: 'ChooseColor' }),
            state
          );
        break;
    case 'ChooseColorDismiss':
        nextState = router.getStateForAction(
            NavigationActions.back(),
            state
        );
        break;
    default:
        nextState = router.getStateForAction(action, state);
        break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

const AppReducer = combineReducers({
  nav: navReducer,
});

export default AppReducer;