import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/settings.styles';
import { getAuth } from 'firebase/auth';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function ProfileScreen() {
  const auth = getAuth();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('Logout successful');
      router.push('/auth');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <View style={styles.container} accessible={true} accessibilityLabel="Profile Screen">
      <View style={styles.header}>
        <Text style={styles.title} accessibilityRole="header">Profile</Text>
        <View style={styles.userInfo}>
          <Text style={styles.userEmail} accessibilityLabel={`Email utilisateur: ${user?.email}`}>
            {user?.email}
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/(tabs)')}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Retour aux paramètres"
        >
          <Text style={styles.buttonText}>Back to Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.logoutButton]} 
          onPress={handleLogout}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Déconnexion"
        >
          <Text style={[styles.buttonText, styles.logoutText]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

