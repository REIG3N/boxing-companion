import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/home.styles';
import { NextSessionFocusProps } from '../../types/home';

export const NextSessionFocus = ({ onStartSession }: NextSessionFocusProps) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Next Session Focus</Text>
    <View style={styles.focusCard}>
      <Text style={styles.focusTitle}>Defense Practice</Text>
      <Text style={styles.focusDescription}>
        Focus on slip & roll drills for 10 minutes each session
      </Text>
      <TouchableOpacity 
        style={styles.startButton}
        onPress={onStartSession}
      >
        <Text style={styles.startButtonText}>Start Session</Text>
      </TouchableOpacity>
    </View>
  </View>
);