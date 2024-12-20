import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
// Firebase imports
import '../lib/firebase';  // chemin relatif simple
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }

    // Test Firebase initialization
    const auth = getAuth();
    console.log('Firebase Auth State:', auth.currentUser);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Auth State Changed:', user ? 'User logged in' : 'No user');
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  console.log('Rendering with auth state:', isAuthenticated);

  return (
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme} >
      <Stack screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(tabs)" />
              <Stack.Screen name="settings" />
              <Stack.Screen name="settings/profile" />
              <Stack.Screen name="settings/about" />
            </Stack>
          </>
        ) : (
          <Stack.Screen name="auth/index" />
        )}
      </Stack>
    </ThemeProvider>
  );
}