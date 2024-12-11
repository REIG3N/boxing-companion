import { View, Text } from 'react-native';
import { styles } from '../../styles/home.styles';
import { Colors } from '../../constants/Colors';
import { WeekOverviewProps } from '../../types/home';

export const WeekOverview: React.FC<WeekOverviewProps> = ({ days, activeDaysIndices }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Last 7 Days</Text>
    <View style={styles.weekCard}>
      <View style={styles.daysRow}>
        {days.map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <View style={[styles.dayCircle, activeDaysIndices.includes(index) && styles.activeDayCircle]}>
              <Text style={styles.dayNumber}>{index + 1}</Text>
            </View>
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>
    </View>
  </View>
);