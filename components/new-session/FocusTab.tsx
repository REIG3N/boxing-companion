import React from 'react';
import { View } from 'react-native';
import { FormData, SessionType, PrescribedGoal } from '@/types/new-session';
import { Dropdown } from './Dropdown';
import { ValidationSection } from './ValidationSection';
import { SoloAssessment } from './SoloAssessment';

interface FocusTabProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  sessionTypes: SessionType[];
  prescribedGoals: PrescribedGoal[];
  isLiveSession: boolean;
  dropdownOpen: string;
  setDropdownOpen: (value: string) => void;
  handleDropdownClick: (e: any) => void;
}

export const FocusTab = ({ 
  formData, 
  setFormData, 
  sessionTypes, 
  prescribedGoals, 
  isLiveSession,
  dropdownOpen,
  setDropdownOpen,
  handleDropdownClick 
}: FocusTabProps) => (
  <>
    <Dropdown
      field="sessionType"
      options={sessionTypes}
      placeholder="Select Session Type"
      formData={formData}
      setFormData={setFormData}
      dropdownOpen={dropdownOpen}
      setDropdownOpen={setDropdownOpen}
      handleDropdownClick={handleDropdownClick}
    />
    <Dropdown
      field="selectedGoal"
      options={prescribedGoals}
      placeholder="Select Training Focus"
      formData={formData}
      setFormData={setFormData}
      dropdownOpen={dropdownOpen}
      setDropdownOpen={setDropdownOpen}
      handleDropdownClick={handleDropdownClick}
    />
    {isLiveSession && formData.selectedGoal && (
      <ValidationSection 
        formData={formData} 
        setFormData={setFormData} 
        prescribedGoals={prescribedGoals}
      />
    )}
    {!isLiveSession && formData.selectedGoal && (
      <SoloAssessment 
        formData={formData} 
        setFormData={setFormData} 
        prescribedGoals={prescribedGoals}
      />
    )}
  </>
); 