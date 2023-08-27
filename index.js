import {AppRegistry} from 'react-native';
import {App} from './source/core/App';
import {name as appName} from './app.json';
import {setupPushNotifications} from './source/notifications/data';

setupPushNotifications();
AppRegistry.registerComponent(appName, () => App);
