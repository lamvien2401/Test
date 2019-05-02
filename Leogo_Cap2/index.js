/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StackNavigator from './src/Navigation/StackNavigator'
import Home from './src/Home';
import Login from './src/Authenication/Login';
import Test from './src/Authenication/Test'
AppRegistry.registerComponent(appName, () => Test);
