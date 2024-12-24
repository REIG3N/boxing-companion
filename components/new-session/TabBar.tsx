import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '@/styles/new-session.styles';
import { TabBarProps } from '@/types/new-session';

export const TabBar = ({ activeTab, setActiveTab }: TabBarProps) => (
  <View style={styles.tabBar}>
    <TouchableOpacity 
      style={[styles.tab, activeTab === 'basic' && styles.activeTab]}
      onPress={() => setActiveTab('basic')}
    >
      <Text style={[styles.tabText, activeTab === 'basic' && styles.activeTabText]}>Basic</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={[styles.tab, activeTab === 'focus' && styles.activeTab]}
      onPress={() => setActiveTab('focus')}
    >
      <Text style={[styles.tabText, activeTab === 'focus' && styles.activeTabText]}>Focus</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={[styles.tab, activeTab === 'notes' && styles.activeTab]}
      onPress={() => setActiveTab('notes')}
    >
      <Text style={[styles.tabText, activeTab === 'notes' && styles.activeTabText]}>Notes</Text>
    </TouchableOpacity>
  </View>
);