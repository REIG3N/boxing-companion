import { View, Text, TouchableOpacity } from 'react-native';
import { Clock, ChevronRight } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { SessionCardProps } from '../../types/home';
import { styles } from '../../styles/home.styles';

export const SessionCard: React.FC<SessionCardProps> = ({ 
  date, 
  duration, 
  focus, 
  onPress 
}) => (
  <TouchableOpacity style={styles.sessionCard} onPress={onPress}>
    <View style={styles.sessionInfo}>
      <View style={styles.sessionMainInfo}>
        <Text style={styles.dateText}>{date}</Text>
        <View style={styles.durationContainer}>
          <Clock size={16} color={Colors.dark.accent} />
          <Text style={styles.durationText}>{duration}</Text>
        </View>
      </View>
      <Text style={styles.focusText} numberOfLines={1} ellipsizeMode="tail">
        {focus}
      </Text>
    </View>
    <ChevronRight size={20} color={Colors.dark.secondary} />
  </TouchableOpacity>
);