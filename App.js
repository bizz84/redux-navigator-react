
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './src/reducers/AppReducer';
import AppWithNavigationState from './src/components/AppNavigator';

class ReduxExampleApp extends React.Component {
  store = createStore(AppReducer);

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReduxExample', () => ReduxExampleApp);

export default ReduxExampleApp;



// import React from 'react';
// import { addNavigationHelpers, StackNavigator } from 'react-navigation';
// import { createStore, combineReducers } from 'redux';
// import { connect } from 'react-redux';
// import MainPage from './src/components/MainPage';

// export const AppNavigator = StackNavigator({
//   MainPage: { screen: MainPage },
// });

// const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('MainPage'));

// const navReducer = (state = initialState, action) => {
//   const nextState = AppNavigator.router.getStateForAction(action, state);

//   // Simply return the original `state` if `nextState` is null or undefined.
//   return nextState || state;
// };

// const appReducer = combineReducers({
//   nav: navReducer,
// });

// class App extends React.Component {
//   render() {
//     return (
//       <AppNavigator navigation={addNavigationHelpers({
//         dispatch: this.props.dispatch,
//         state: this.props.nav,
//       })} />
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   nav: state.nav
// });

// const AppWithNavigationState = connect(mapStateToProps)(App);

// const store = createStore(appReducer);

// class Root extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <AppWithNavigationState />
//       </Provider>
//     );
//   }
// }

//export default connect(mapStateToProps)(AppWithNavigationState);