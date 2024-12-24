import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '@/styles/new-session.styles';
import { Colors } from '@/constants/Colors';

interface FormTextAreaProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  label: string;
  numberOfLines?: number;
}

export const FormTextArea = ({ 
  value, 
  onChangeText, 
  placeholder, 
  label,
  numberOfLines = 4 
}: FormTextAreaProps) => (
  <View style={styles.assessmentSection}>
    <Text style={styles.contextLabel}>{label}</Text>
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={Colors.dark.accent}
      style={styles.contextInput}
      multiline={true}
      numberOfLines={numberOfLines}
    />
  </View>
); 