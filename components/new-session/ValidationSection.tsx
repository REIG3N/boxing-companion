import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Shield } from 'lucide-react-native';
import { styles } from '@/styles/new-session.styles';
import { Colors } from '@/constants/Colors';
import { FormData, PrescribedGoal, ValidationSuccessLevel } from '@/types/new-session';

interface ValidationSectionProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  prescribedGoals: PrescribedGoal[];
}

export const ValidationSection = ({ formData, setFormData, prescribedGoals }: ValidationSectionProps) => {
  const selectedGoalData = prescribedGoals.find(g => g.id === formData.selectedGoal);
  
  const validationLevels = [
    { 
      key: 'easier', 
      label: 'Less Experienced',
      desc: 'Successfully applied against beginners'
    },
    { 
      key: 'same', 
      label: 'Similar Level',
      desc: 'Effective with equal partners'
    },
    { 
      key: 'harder', 
      label: 'More Experienced',
      desc: 'Worked against advanced opponents'
    }
  ];
  
  const handleLevelClick = (clickedKey: string) => {
    const levels = validationLevels.map(l => l.key);
    const clickedIndex = levels.indexOf(clickedKey);
    
    setFormData({
      ...formData,
      validation: {
        ...formData.validation,
        successByLevel: {
          ...formData.validation.successByLevel,
          ...levels.reduce((acc, key, index) => ({
            ...acc,
            [key]: index <= clickedIndex
          }), {})
        }
      }
    });
  };
  
  return (
    <View style={styles.validationContainer}>
      <View style={styles.validationHeader}>
        <Shield size={20} color={Colors.dark.secondary} />
        <Text style={[styles.validationTitle, { color: Colors.dark.secondary }]}>
          Live Application Assessment
        </Text>
      </View>
      
      <Text style={styles.validationMetric}>{selectedGoalData?.validationMetric}</Text>

      <View style={styles.assessmentSection}>
        <Text style={styles.validationLabel}>Successfully performed against:</Text>
        <View style={styles.movementButtonsContainer}>
          {validationLevels.map(level => (
            <TouchableOpacity
              key={level.key}
              onPress={() => handleLevelClick(level.key)}
              style={[
                styles.movementButton,
                formData.validation.successByLevel[level.key as keyof ValidationSuccessLevel] ? styles.selectedMovement : styles.unselectedMovement
              ]}
            >
              <Text style={[
                styles.movementButtonText,
                formData.validation.successByLevel[level.key as keyof ValidationSuccessLevel] ? styles.selectedMovementText : styles.unselectedMovementText
              ]}>
                {level.label}
              </Text>
              <Text style={styles.movementDescription}>{level.desc}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.masteryContainer}>
        <Text style={styles.masteryLabel}>Rate your mastery level (1: beginner - 5: expert)</Text>
        <View style={styles.masteryButtons}>
          {[1, 2, 3, 4, 5].map(value => (
            <TouchableOpacity
              key={value}
              onPress={() => setFormData({
                ...formData,
                validation: {
                  ...formData.validation,
                  perceivedMastery: value
                }
              })}
              style={[
                styles.ratingButton,
                formData.validation.perceivedMastery === value ? styles.selectedRating : styles.unselectedRating
              ]}
            >
              <Text style={{ 
                color: formData.validation.perceivedMastery === value ? Colors.dark.text : Colors.dark.accent 
              }}>
                {value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View>
        <Text style={styles.contextLabel}>Context Notes</Text>
        <TextInput
          value={formData.validation.context}
          onChangeText={(text) => setFormData({
            ...formData,
            validation: {
              ...formData.validation,
              context: text
            }
          })}
          placeholder="Any specific observations about your performance?"
          placeholderTextColor={Colors.dark.accent}
          style={styles.contextInput}
          multiline={true}
          numberOfLines={3}
        />
      </View>
    </View>
  );
};