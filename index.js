import {AppRegistry} from 'react-native';
import {App} from './source/core/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
