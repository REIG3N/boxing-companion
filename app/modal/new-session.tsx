import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import { X, ChevronDown, ChevronUp, Shield } from 'lucide-react-native';
import { styles } from '@/styles/new-session.styles';
import { Colors } from '@/constants/Colors';
import { 
  TabBarProps, 
  SessionType, 
  PrescribedGoal, 
  ValidationLevel,
  FormData,
  NewSessionScreenProps, 
  TabType
} from '@/types/new-session';
import { TabBar } from '@/components/new-session/TabBar';
import { BasicTab } from '@/components/new-session/BasicTab';
import { FocusTab } from '@/components/new-session/FocusTab';
import { NotesTab } from '@/components/new-session/NotesTab';
import { router } from 'expo-router';
import { mockData } from '@/app/(tabs)/goals';
import { SoloAssessment } from '@/components/new-session/SoloAssessment';

const NewSessionScreen = () => {
  const [formData, setFormData] = useState<FormData>({
    date: new Date().toISOString().split('T')[0],
    duration: '45',
    sessionType: '',
    selectedGoal: '',
    rpe: 3,
    enjoyment: 3,
    insights: '',
    challenges: '',
    validation: {
      successByLevel: {
        easier: false,
        same: false,
        harder: false,
        clean: false,
        smooth: false,
        ready: false
      },
      perceivedMastery: 0,
      context: ''
    }
  });

  const [dropdownOpen, setDropdownOpen] = useState('');
  const [isLiveSession, setIsLiveSession] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('basic');

  const sessionTypes = [
    { 
      id: 'live', 
      label: 'Live Practice', 
      isLive: true, 
      description: 'Real-time application with partners',
      badges: ['Sparring', 'Gym Class']
    },
    { 
      id: 'solo', 
      label: 'Solo Practice', 
      isLive: false, 
      description: 'Individual skill development',
      badges: ['Heavy Bag', 'Shadow Boxing', 'Pad Work']
    }
  ];

  const prescribedGoals = mockData.subGoals.map(goal => ({
    id: goal.id.toString(),
    label: goal.title,
    description: goal.instruction,
    validationMetric: goal.validationMetric
  }));

  useEffect(() => {
    const sessionType = sessionTypes.find(type => type.id === formData.sessionType);
    setIsLiveSession(sessionType?.isLive || false);
  }, [formData.sessionType]);

  const handleDropdownClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    router.back();
  };

  const handleSave = () => {
    Alert.alert('Session Saved', 'Your training session has been saved.');
    router.back();
  };

  return (
    <TouchableWithoutFeedback onPress={() => setDropdownOpen('')}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.title}>Log Training Session</Text>
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <X size={24} color={Colors.dark.text} />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
            <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
            
            {activeTab === 'basic' && (
              <BasicTab formData={formData} setFormData={setFormData} />
            )}

            {activeTab === 'focus' && (
              <FocusTab 
                formData={formData}
                setFormData={setFormData}
                sessionTypes={sessionTypes}
                prescribedGoals={prescribedGoals}
                isLiveSession={isLiveSession}
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}
                handleDropdownClick={handleDropdownClick}
              />
            )}

            {activeTab === 'notes' && (
              <NotesTab formData={formData} setFormData={setFormData} />
            )}
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity
              onPress={handleSave}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Save Session</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewSessionScreen;


