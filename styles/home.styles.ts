import { StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

// Define a base style for common properties
const baseCardStyle = {
  borderRadius: 8,
  borderWidth: 1,
  borderColor: 'rgba(117, 117, 117, 0.2)',
  backgroundColor: 'rgba(6, 8, 21, 0.9)',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  metricCard: {
    flex: 1,
    minWidth: '45%',
    padding: 16,
    ...baseCardStyle,
  },
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  metricTitle: {
    color: Colors.dark.accent,
    fontSize: 14,
  },
  metricValue: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  valueText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.dark.text,
  },
  trendText: {
    marginLeft: 8,
    fontSize: 14,
  },
  subtitleText: {
    marginLeft: 8,
    fontSize: 14,
    color: Colors.dark.accent,
  },
  sessionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    ...baseCardStyle,
    marginBottom: 12,
    minHeight: 76,
  },
  sessionInfo: {
    flex: 1,
    marginRight: 12,
  },
  sessionMainInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  dateText: {
    color: Colors.dark.text,
    fontWeight: '500',
    fontSize: 16,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    color: Colors.dark.accent,
    fontSize: 14,
    marginLeft: 8,
  },
  focusText: {
    color: Colors.dark.accent,
    fontSize: 14,
    flex: 1,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.dark.text,
    marginBottom: 12,
  },
  weekCard: {
    padding: 16,
    ...baseCardStyle,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayContainer: {
    alignItems: 'center',
  },
  dayCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(117, 117, 117, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  activeDayCircle: {
    backgroundColor: Colors.dark.primary,
  },
  dayNumber: {
    color: Colors.dark.text,
    fontSize: 12,
  },
  dayText: {
    color: Colors.dark.accent,
    fontSize: 12,
  },
  focusCard: {
    padding: 16,
    ...baseCardStyle,
  },
  focusTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.dark.secondary,
    marginBottom: 8,
  },
  focusDescription: {
    fontSize: 14,
    color: Colors.dark.text,
    marginBottom: 4,
  },
  startButton: {
    backgroundColor: Colors.dark.primary,
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 16,
  },
  startButtonText: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: '600',
  },
  metricsGrid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
});
