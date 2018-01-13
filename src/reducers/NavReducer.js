import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../components/AppNavigator';

const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams('Main');
const initialNavState = router.getStateForAction(mainNavAction);

const NavReducer = (state = initialNavState, action) => {
    let nextState;
    switch (action.type) {
    case 'ChooseColor':
        nextState = router.getStateForAction(
            NavigationActions.navigate({ routeName: 'ChooseColor' }),
            state);
        break;
    // case 'ChooseColorDismiss':
    //     nextState = router.getStateForAction(
    //         NavigationActions.back(),
    //         state);
    //     break;
    default:
        nextState = router.getStateForAction(action, state);
        break;
    }
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

export default NavReducer;