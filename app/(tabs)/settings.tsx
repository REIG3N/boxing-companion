import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight, User, Info } from 'lucide-react-native';
import { router } from 'expo-router';
import { styles } from '../../styles/settings.styles';
import { Colors } from '@/constants/Colors';
import { getAuth } from 'firebase/auth';

export default function SettingsScreen() {
  const auth = getAuth();
  const user = auth.currentUser;

  const navigateToAbout = () => {
    router.push('/settings/about');
  };

  const navigateToProfile = () => {
    router.push('/settings/profile');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.userInfo}>
          <Text style={styles.userEmail}>{user?.email}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <TouchableOpacity style={styles.button} onPress={navigateToProfile}>
          <View style={styles.buttonContent}>
            <User size={20} color={Colors.dark.accent} />
            <Text style={[styles.buttonText, { marginLeft: 12 }]}>Profile</Text>
          </View>
          <ChevronRight size={20} color={Colors.dark.secondary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateToAbout}>
          <View style={styles.buttonContent}>
            <Info size={20} color={Colors.dark.accent} />
            <Text style={[styles.buttonText, { marginLeft: 12 }]}>About</Text>
          </View>
          <ChevronRight size={20} color={Colors.dark.secondary} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}