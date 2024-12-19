import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import styles from '../../styles/goals.styles';
import { useState } from 'react';
import { SubGoalCardProps } from '@/types/goals';

const SubGoalCard: React.FC<SubGoalCardProps> = ({ title, instruction, longInstruction, completionStatus }) => {
  const [expanded, setExpanded] = useState(false);

  const getIcon = () => {
    const standardIconSize = 20;
    const hourglassIconSize = 16;
    switch (completionStatus) {
      case 'unknown':
        return <Ionicons name="help-circle-outline" size={standardIconSize} color={Colors.dark.accent} />;
      case 'inProgress':
        return <Ionicons name="hourglass" size={hourglassIconSize} color={Colors.dark.secondary} />;
      case 'completed':
        return <Ionicons name="checkmark-circle" size={standardIconSize} color="green" />;
      default:
        return null;
    }
  };

  return (
    <Pressable 
      style={styles.subGoalCard}
      onPress={() => setExpanded(!expanded)}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.subGoalTitle}>{title}</Text>
        {getIcon()}
      </View>
      <Text style={styles.subGoalInstruction}>
        {expanded ? longInstruction : instruction}
      </Text>
      <Text style={styles.expandText}>
        {expanded ? "Show less" : "Show more"}
      </Text>
    </Pressable>
  );
};

export default SubGoalCard;