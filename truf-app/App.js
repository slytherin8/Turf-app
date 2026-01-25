import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/AppNavigator';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    LatoRegular: require('./assets/fonts/Lato-Black.ttf'),
    LatoBold: require('./assets/fonts/Lato-Regular.ttf'),
    LatoLight: require('./assets/fonts/Lato-Light.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigator />
      <StatusBar style="dark" />
    </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
