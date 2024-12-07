import { Redirect, Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | null>(null);
  const [isLoading, setIsLoading] = React.useState(true); // Ajout d'un état de chargement

  
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    setIsAuthenticated(!!user);
    setIsLoading(false); // Une fois que Firebase a vérifié l'authentification
    });

    return () => unsubscribe();
  }, []);

    // Attendre que Firebase vérifie l'état d'authentification
    if (isLoading) {
      return <Redirect href="/auth" />; // ou un écran de chargement
    }

  // Si l'utilisateur n'est pas authentifié, rediriger vers la page de connexion
  if (isAuthenticated === false) {
    return <Redirect href="/auth" />;
  }

  // // Si l'état d'authentification n'est pas encore déterminé, on peut retourner null
  // // ou un écran de chargement
  // if (isAuthenticated === null) {
  //   return null;
  // }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
