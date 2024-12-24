import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { styles } from '@/styles/new-session.styles';
import { Colors } from '@/constants/Colors';
import { FormData } from '@/types/new-session';

interface DropdownProps {
  field: keyof FormData;
  options: any[];
  placeholder: string;
  formData: FormData;
  setFormData: (data: FormData) => void;
  dropdownOpen: string;
  setDropdownOpen: (value: string) => void;
  handleDropdownClick: (e: any) => void;
}

export const Dropdown = ({ field, options, placeholder, formData, setFormData, dropdownOpen, setDropdownOpen, handleDropdownClick }: DropdownProps) => {
  const isOpen = dropdownOpen === field;
  const selected = options.find(opt => opt.id === formData[field]);

  return (
    <View style={[styles.dropdownContainer, isOpen && styles.activeDropdown]}>
      <TouchableOpacity
        onPress={(e) => {
          handleDropdownClick(e);
          setDropdownOpen(isOpen ? '' : field);
        }}
        style={styles.dropdownButton}
      >
        <Text style={styles.dropdownButtonText}>
          {selected ? selected.label : placeholder}
        </Text>
        {isOpen ? <ChevronUp color={Colors.dark.text} /> : <ChevronDown color={Colors.dark.text} />}
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdownOverlay}>
          <ScrollView style={styles.dropdownList}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={styles.dropdownItem}
                onPress={() => {
                  setFormData({ ...formData, [field]: option.id });
                  setDropdownOpen('');
                }}
              >
                <Text style={styles.dropdownItemText}>{option.label}</Text>
                <Text style={styles.dropdownDescription}>{option.description}</Text>
                {option.badges && (
                  <View style={styles.badgeContainer}>
                    {option.badges.map((badge: string) => (
                      <Text 
                        key={badge} 
                        style={[
                          styles.badge,
                          option.isLive ? styles.liveBadge : styles.soloBadge
                        ]}
                      >
                        {badge}
                      </Text>
                    ))}
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};