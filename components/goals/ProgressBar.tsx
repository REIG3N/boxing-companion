import { View, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
import styles from '../../styles/goals.styles';
import { GoalsData } from '@/types/goals';

const ProgressBar = ({ progress, totalSubGoals, mockData }: { progress: number; totalSubGoals: number; mockData: GoalsData }) => {
  const completedSteps = mockData.subGoals.filter((subGoal) => subGoal.completionStatus === 'completed').length;

  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.progressBarHeader}>
        <Text style={styles.progressTitle}>{mockData.mainGoal.title}</Text>
      </View>
      <View style={styles.progressTrack}>
        {Array.from({ length: totalSubGoals }, (_, index) => (
          <View
            key={index}
            style={[
              styles.progressStep,
              index < completedSteps ? styles.progressFill : styles.progressEmpty,
            ]}
          />
        ))}
      </View>
      <Text style={styles.progressPercentage}>{`${completedSteps} / ${totalSubGoals}`}</Text>
    </View>
  );
};

export default ProgressBar;