import { StyleSheet, View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { GoalsData } from '@/types/goals';
import ProgressBar from '../../components/goals/ProgressBar';
import SwotCard from '../../components/goals/SwotCard';
import SubGoalCard from '../../components/goals/SubGoalCard';
import styles from '../../styles/goals.styles';

const mockData: GoalsData = {
  mainGoal: {
    title: "Improve Head Movement & Counter-Punching",
    progress: 60,
    currentSessions: 3,
    totalSessions: 5
  },
  swot: {
    strengths: ["Jab accuracy", "Footwork"],
    weaknesses: ["Guard drops in combinations", "Head movement"],
    opportunities: ["Develop hook variations", "Counter-punching"],
    threats: ["Stamina in later rounds", "Inside fighting"]
  },
  subGoals: [
    {
      id: 1,
      title: "Defense Practice",
      instruction: "Hold center ring position. Only pivot on lead foot to evade.",
      longInstruction: "Stand in ring center. Imagine being surrounded - you can only pivot on your lead foot to avoid attacks. Find the most efficient angles of escape while staying balanced for counters.",
      completionStatus: 'unknown',
    },
    {
      id: 2,
      title: "Reaction Speed",
      instruction: "Touch lead hand to shoulder before any counter punch.",
      longInstruction: "Before throwing any counter, tap your lead hand to your rear shoulder. This creates a timing puzzle - find the sweet spot between speed and positioning. How fast can you reset while maintaining form?",
      completionStatus: 'inProgress',
    },
    {
      id: 3,
      title: "Combinations",
      instruction: "Every 3rd punch must be thrown while slipping.",
      longInstruction: "Count your punches. Every third strike must be thrown while performing a slip. This creates a rhythm puzzle that challenges both your coordination and tactical thinking.",
      completionStatus: 'completed',
    }
  ],
  previousTrainingGoals: [
    {
      id: 1,
      title: "Head Movement",
      description: "Focus on slipping and rolling under punches.",
      date: "2023-10-01",
    },
    {
      id: 2,
      title: "Counter-Punching",
      description: "Practice countering after a defensive move.",
      date: "2023-09-25",
    },
    {
      id: 3,
      title: "Combination Drills",
      description: "Work on fluid combinations with footwork.",
      date: "2023-09-20",
    },
  ],
};

export default function GoalScreen() {
  const totalSubGoals = mockData.subGoals.length;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Main Goal Progress Section */}
      <View style={styles.mainGoalCard}>
        <ProgressBar progress={mockData.mainGoal.progress} totalSubGoals={totalSubGoals} mockData={mockData} />
      </View>

      {/* Sub-Goals Section */}
      <View style={styles.subGoalsCard}>
        <Text style={styles.sectionTitle}>Sub-Goals</Text>
        <Text style={styles.subGoalsSubtitle}>
          Complete these sub-goals in your next sessions
        </Text>
        <View style={styles.subGoalsGrid}>
          {mockData.subGoals.map((subGoal) => (
            <SubGoalCard
              key={subGoal.id}
              title={subGoal.title}
              instruction={subGoal.instruction}
              longInstruction={subGoal.longInstruction}
              completionStatus={subGoal.completionStatus} id={0}            />
          ))}
        </View>
      </View>

      {/* SWOT Analysis Section */}
      <View style={styles.swotCard}>
        <Text style={styles.sectionTitle}>SWOT Analysis</Text>
        <View style={styles.swotGrid}>
          <SwotCard
            title="Strengths"
            items={mockData.swot.strengths}
            borderColor={Colors.dark.primary} type={'strengths'}            
          />
          <SwotCard
            title="Weaknesses"
            items={mockData.swot.weaknesses}
            borderColor={Colors.dark.secondary} type={'weaknesses'}          />
          <SwotCard
            title="Opportunities"
            items={mockData.swot.opportunities}
            borderColor={Colors.dark.primary} type={'opportunities'}          />
          <SwotCard
            title="Threats"
            items={mockData.swot.threats}
            borderColor={Colors.dark.secondary} type={'threats'}          />
        </View>
      </View>

      {/* Previous Training Goals Section */}
      <View style={styles.previousGoalsCard}>
        <Text style={styles.sectionTitle}>Previous Training Goals</Text>
        <Text style={styles.previousGoalsSubtitle}>
          Review your past training goals and progress
        </Text>
        <View style={styles.goalsColumn}>
          {mockData.previousTrainingGoals.map((goal) => (
            <View key={goal.id} style={styles.goalCard}>
              <Text style={styles.goalTitle}>{goal.title}</Text>
              <Text style={styles.goalDescription}>{goal.description}</Text>
              <Text style={styles.goalDate}>{goal.date}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
