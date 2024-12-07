import { Redirect, router, Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import { Platform, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setIsLoading(false); 
    });
    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <Redirect href="/auth" />;
  }

  if (isAuthenticated === false) {
    return <Redirect href="/auth" />;
  }

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#fa2d2d',
          headerShown: false,
          tabBarStyle: styles.tabBar,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
            tabBarLabelStyle: styles.tabBarLabel
          }}
        />
        <Tabs.Screen
          name="goals"
          options={{
            title: 'Stats',
            tabBarIcon: ({ color }) => <Ionicons name="stats-chart" size={24} color={color} />,
            tabBarLabelStyle: styles.tabBarLabel
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
            tabBarLabelStyle: styles.tabBarLabel
          }}
        />
      </Tabs>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => router.push('/modal/new-session')}
      >
        <Ionicons name="add" size={30} color="#ffffff" />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    height: 60,
    backgroundColor: 'rgba(6, 8, 21, 0.9)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(117, 117, 117, 0.2)',
    paddingBottom: Platform.OS === 'ios' ? 20 : 8,
    paddingTop: 8,
  },
  tabBarLabel: {
    fontSize: 0
  },
  floatingButton: {
    position: 'absolute',
    right: 16,
    bottom: 76,
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#fa2d2d',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    zIndex: 1,
  }
});