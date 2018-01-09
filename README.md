# Redux Navigation Example App

This repo contains a sample React Native App showing how to combine [redux](https://github.com/reactjs/redux) and [react-navigation](https://github.com/react-navigation/react-navigation).


## Getting started

Clone this repo, then run:

```
npm install
react-native run-ios
```

## Project dependencies

The app uses the following code dependencies:

* `react`
* `react-native`
* [`react-navigation`](https://github.com/react-navigation/react-navigation)
* `react-redux`
* `redux`

Look up these packages on `package-lock.json` to see which version is currently installed.

## Development environment

A couple of IDEs are suggested:

* [Atom](https://atom.io/)
* [Visual Studio Code](https://code.visualstudio.com/) with [React Native Tools](https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native) plugin.


### System information

The app has been tested to compile and run correctly with the following:

```
> react-native --version
react-native-cli: 2.0.1
react-native: 0.51.0

> npm --version
5.3.0

> yarn --version
1.1.0

# Systen version
ProductName:	Mac OS X
ProductVersion:	10.12.6
BuildVersion:	16G29
---
Xcode 9.0
Build version 9A235
```

## App Architecture

The app is built in React Native with heavy usage of Redux for state management.

This is done following conventions and principles explained in this (highly recommended) course:

* [The Complete React Native and Redux Course](https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/content)

Navigation is done with [`react-navigation`](https://github.com/react-navigation/react-navigation) (see [NavigationPlayground](https://github.com/react-navigation/react-navigation/tree/master/examples/NavigationPlayground) example).



