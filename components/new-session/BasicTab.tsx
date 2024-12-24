import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '@/styles/new-session.styles';
import { FormData } from '@/types/new-session';
import { RatingButtons } from './RatingButtons';

interface BasicTabProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export const BasicTab = ({ formData, setFormData }: BasicTabProps) => (
  <>
    <View style={styles.inputGroup}>
      <Text style={styles.label}>Date</Text>
      <TextInput
        value={formData.date}
        onChangeText={(text) => setFormData({ ...formData, date: text })}
        style={styles.input}
        placeholder="YYYY-MM-DD"
      />
    </View>

    <View style={styles.inputGroup}>
      <Text style={styles.label}>Duration (min)</Text>
      <TextInput
        value={String(formData.duration)}
        onChangeText={(text) => setFormData({ ...formData, duration: text })}
        style={styles.input}
        keyboardType="numeric"
      />
    </View>

    <RatingButtons field="rpe" label="Rate Your Effort (1-5)" formData={formData} setFormData={setFormData} />
    <RatingButtons field="enjoyment" label="Rate Your Enjoyment (1-5)" formData={formData} setFormData={setFormData} />
  </>
); 