import { View, Text } from 'react-native';
import styles from '../../styles/goals.styles';
import { SwotCardProps } from '@/types/goals';

const SwotCard: React.FC<SwotCardProps> = ({ title, items, type }) => {
  const getContentStyle = () => {
    switch (type) {
      case 'strengths':
        return styles.strengthContent;
      case 'weaknesses':
        return styles.weaknessContent;
      case 'opportunities':
        return styles.opportunityContent;
      case 'threats':
        return styles.threatContent;
      default:
        return {};
    }
  };

  return (
    <View style={styles.swotQuadrant}>
      <Text style={styles.swotLabel}>{title}</Text>
      <View style={[styles.swotContent, getContentStyle()]}>
        {items.map((item, index) => (
          <Text key={index} style={styles.swotItem}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default SwotCard;