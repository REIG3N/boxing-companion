import { View, Text } from 'react-native';
import { Colors } from '../../constants/Colors';
import { MetricCardProps } from '../../types/home';
import { styles } from '../../styles/home.styles';

export const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  subtitle 
}) => (
  <View style={styles.metricCard}>
    <View style={styles.metricHeader}>
      <Text style={styles.metricTitle}>{title}</Text>
      <Icon size={20} color={Colors.dark.secondary} />
    </View>
    <View style={styles.metricValue}>
      <Text style={styles.valueText}>{value}</Text>
      {trend && (
        <Text style={[styles.trendText, { color: trend > 0 ? Colors.dark.primary : Colors.dark.secondary }]}>
          {trend > 0 ? '+' : ''}{trend}%
        </Text>
      )}
      {subtitle && <Text style={styles.subtitleText}>{subtitle}</Text>}
    </View>
  </View>
);