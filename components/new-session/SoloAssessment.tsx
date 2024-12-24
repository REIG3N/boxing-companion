import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Shield } from 'lucide-react-native';
import { styles } from '@/styles/new-session.styles';
import { Colors } from '@/constants/Colors';
import { FormData, PrescribedGoal, ValidationSuccessLevel } from '@/types/new-session';

interface SoloAssessmentProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  prescribedGoals: PrescribedGoal[];
}

const movementCategories = [
  { 
    key: 'clean' as keyof ValidationSuccessLevel, 
    label: 'Clean & Crisp',
    desc: 'Technique was sharp and correct'
  },
  { 
    key: 'smooth' as keyof ValidationSuccessLevel, 
    label: 'Smooth & Natural',
    desc: 'Movement flowed without forcing it'
  },
  { 
    key: 'ready' as keyof ValidationSuccessLevel, 
    label: 'Ready to Apply',
    desc: 'Confident to use this in sparring'
  }
];

export const SoloAssessment = ({ formData, setFormData, prescribedGoals }: SoloAssessmentProps) => {
  const handleMovementClick = (clickedKey: keyof ValidationSuccessLevel) => {
    const levels = movementCategories.map(l => l.key);
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

  const selectedGoalData = prescribedGoals.find(g => g.id === formData.selectedGoal);
  
  return (
    <View style={styles.validationContainer}>
      <View style={styles.validationHeader}>
        <Shield size={20} color={Colors.dark.secondary} />
        <Text style={[styles.validationTitle, { color: Colors.dark.secondary }]}>
          Technical Development
        </Text>
      </View>
      
      <Text style={styles.validationMetric}>{selectedGoalData?.validationMetric}</Text>

      <View style={styles.assessmentSection}>
        <Text style={styles.validationLabel}>How did your movement feel during practice?</Text>
        <View style={styles.movementButtonsContainer}>
          {movementCategories.map(level => (
            <TouchableOpacity
              key={level.key}
              onPress={() => handleMovementClick(level.key)}
              style={[
                styles.movementButton,
                formData.validation.successByLevel[level.key as keyof typeof formData.validation.successByLevel] 
                  ? styles.selectedMovement 
                  : styles.unselectedMovement
              ]}
            >
              <Text style={[
                styles.movementButtonText,
                formData.validation.successByLevel[level.key as keyof typeof formData.validation.successByLevel] 
                  ? styles.selectedMovementText 
                  : styles.unselectedMovementText
              ]}>
                {level.label}
              </Text>
              <Text style={styles.movementDescription}>{level.desc}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.assessmentSection}>
        <Text style={styles.validationLabel}>Rate your overall comfort with this technique</Text>
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
                formData.validation.perceivedMastery === value 
                  ? styles.selectedRating 
                  : styles.unselectedRating
              ]}
            >
              <Text style={[
                styles.movementButtonText,
                formData.validation.perceivedMastery === value 
                  ? styles.selectedMovementText 
                  : styles.unselectedMovementText
              ]}>
                {value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.assessmentSection}>
        <Text style={styles.contextLabel}>Technical Notes</Text>
        <TextInput
          value={formData.validation.context}
          onChangeText={(text) => setFormData({
            ...formData,
            validation: {
              ...formData.validation,
              context: text
            }
          })}
          placeholder="What worked well? What needs improvement?"
          placeholderTextColor={Colors.dark.accent}
          style={styles.contextInput}
          multiline={true}
          numberOfLines={4}
        />
      </View>
    </View>
  );
}; 