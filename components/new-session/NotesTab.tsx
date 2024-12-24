import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '@/styles/new-session.styles';
import { FormData } from '@/types/new-session';
import { Colors } from '@/constants/Colors';

interface NotesTabProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export const NotesTab = ({ formData, setFormData }: NotesTabProps) => (
  <View style={styles.notesContainer}>
    <View>
      <Text style={styles.notesLabel}>New Insights</Text>
      <TextInput
        value={formData.insights}
        onChangeText={(text) => setFormData({ ...formData, insights: text })}
        placeholder="What did you discover during this session?"
        placeholderTextColor={Colors.dark.accent}
        style={styles.notesInput}
        multiline={true}
        numberOfLines={4}
      />
    </View>
    <View>
      <Text style={styles.notesLabel}>Challenges Faced</Text>
      <TextInput
        value={formData.challenges}
        onChangeText={(text) => setFormData({ ...formData, challenges: text })}
        placeholder="What problems did you encounter?"
        placeholderTextColor={Colors.dark.accent}
        style={styles.notesInput}
        multiline={true}
        numberOfLines={4}
      />
    </View>
  </View>
); 