import { View, Text } from 'react-native';
import styles from '../../styles/goals.styles';
import { SwotCardProps } from '@/types/goals';

const SwotCard: React.FC<SwotCardProps> = ({ title, items, borderColor }) => (
  <View style={styles.swotQuadrant}>
    <Text style={styles.swotLabel}>{title}</Text>
    <View style={[styles.swotContent, { borderLeftColor: borderColor }]}>
      {items.map((item, index) => (
        <Text key={index} style={styles.swotItem}>
          {item}
        </Text>
      ))}
    </View>
  </View>
);

export default SwotCard;