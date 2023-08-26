import {FC, useEffect, useMemo} from 'react';
import {Platform, StatusBar, StyleSheet, UIManager} from 'react-native';
import ThemeProvider from '../common/ui/theme/provider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {initI18N} from './i18n';
import AppNavigator from './navigation';
import {MMKVContext} from '../common/data/mmkv';
import {MMKV} from 'react-native-mmkv';
import {RealmProvider} from '../common/data/realm';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const styles = StyleSheet.create({
  gestureHandler: {
    flex: 1,
  },
});

export const App: FC = () => {
  useEffect(() => {
    initI18N();
  }, []);

  const mmkv = useMemo(() => new MMKV(), []);

  return (
    <MMKVContext.Provider value={mmkv}>
      <RealmProvider deleteRealmIfMigrationNeeded>
        <SafeAreaProvider>
          <ThemeProvider>
            <GestureHandlerRootView style={styles.gestureHandler}>
              <NavigationContainer>
                <StatusBar />
                <AppNavigator />
              </NavigationContainer>
            </GestureHandlerRootView>
          </ThemeProvider>
        </SafeAreaProvider>
      </RealmProvider>
    </MMKVContext.Provider>
  );
};
