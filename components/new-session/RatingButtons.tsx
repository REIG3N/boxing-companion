import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '@/styles/new-session.styles';
import { Colors } from '@/constants/Colors';
import { FormData } from '@/types/new-session';

interface RatingButtonsProps {
  field: keyof FormData;
  label: string;
  formData: FormData;
  setFormData: (data: FormData) => void;
  showValue?: boolean;
}

export const RatingButtons = ({ field, label, formData, setFormData, showValue = true }: RatingButtonsProps) => (
  <View style={styles.ratingContainer}>
    <Text style={styles.ratingLabel}>{label}</Text>
    <View style={styles.ratingButtons}>
      {[1, 2, 3, 4, 5].map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setFormData({ ...formData, [field]: value })}
          style={[styles.ratingButton, formData[field] === value ? styles.selectedRating : styles.unselectedRating]}
        >
          <Text style={{ color: formData[field] === value ? Colors.dark.text : Colors.dark.accent }}>
            {showValue ? value : '●'}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);