import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    padding: 8,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  mainGoalCard: {
    backgroundColor: 'rgba(6, 8, 21, 0.9)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: `${Colors.dark.accent}33`,
  },
  progressBarContainer: {
    width: '100%',
  },
  progressBarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.dark.text,
  },
  progressTrack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 4,
  },
  progressStep: {
    flex: 1,
    marginHorizontal: 5,
  },
  progressFill: {
    backgroundColor: Colors.dark.primary,
    height: '100%',
    borderRadius: 4,
  },
  progressEmpty: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: '100%',
    borderRadius: 4,
  },
  progressPercentage: {
    position: 'absolute',
    right: 0,
    bottom: -20,
    color: Colors.dark.text,
    fontSize: 12,
  },
  swotCard: {
    backgroundColor: 'rgba(6, 8, 21, 0.9)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: `${Colors.dark.accent}33`,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.dark.text,
    marginBottom: 12,
  },
  swotGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  swotQuadrant: {
    flex: 1,
    minWidth: '48%',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: `${Colors.dark.accent}33`,
  },
  swotLabel: {
    fontSize: 14,
    color: Colors.dark.accent,
    marginBottom: 4,
  },
  swotContent: {
    padding: 8,
    borderLeftWidth: 3,
    borderRadius: 4,
    flex: 1,
  },
  strengthContent: {
    backgroundColor: `${Colors.dark.primary}1A`,
    borderLeftColor: Colors.dark.primary,
  },
  weaknessContent: {
    backgroundColor: `${Colors.dark.secondary}1A`,
    borderLeftColor: Colors.dark.secondary,
  },
  opportunityContent: {
    backgroundColor: `${Colors.dark.primary}1A`,
    borderLeftColor: Colors.dark.primary,
  },
  threatContent: {
    backgroundColor: `${Colors.dark.secondary}1A`,
    borderLeftColor: Colors.dark.secondary,
  },
  swotItem: {
    fontSize: 12,
    color: Colors.dark.text,
    marginBottom: 4,
  },
  subGoalsCard: {
    backgroundColor: 'rgba(6, 8, 21, 0.9)',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: `${Colors.dark.accent}33`,
  },
  subGoalsSubtitle: {
    fontSize: 12,
    color: Colors.dark.accent,
    marginBottom: 12,
  },
  subGoalsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
  },
  subGoalCard: {
    width: '48%',
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(6, 8, 21, 0.9)',
    borderWidth: 1,
    borderColor: `${Colors.dark.accent}33`,
    minHeight: 90,
  },
  subGoalTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.dark.secondary,
    marginBottom: 4,
  },
  subGoalInstruction: {
    fontSize: 10,
    color: Colors.dark.text,
  },
  expandText: {
    fontSize: 10,
    color: Colors.dark.accent,
  },
  previousGoalsCard: {
    backgroundColor: 'rgba(6, 8, 21, 0.9)',
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
    borderWidth: 1,
    borderColor: `${Colors.dark.accent}33`,
  },
  previousGoalsSubtitle: {
    fontSize: 12,
    color: Colors.dark.accent,
    marginBottom: 12,
  },
  goalsColumn: {
    gap: 12,
  },
  goalCard: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(6, 8, 21, 0.9)',
    borderWidth: 1,
    borderColor: `${Colors.dark.accent}33`,
  },
  goalTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.dark.secondary,
  },
  goalDescription: {
    fontSize: 12,
    color: Colors.dark.text,
  },
  goalDate: {
    fontSize: 10,
    color: Colors.dark.accent,
  },
  notesInput: {
    height: 100,
    borderColor: Colors.dark.secondary,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    color: Colors.dark.text,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export default styles;