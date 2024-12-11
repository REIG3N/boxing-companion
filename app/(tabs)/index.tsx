import { StyleSheet, ScrollView, View, Text,  TouchableOpacity, Platform } from 'react-native';
import { TrendingUp, Heart, Calendar, ChevronRight, Clock, Smile } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';


interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ComponentType<any>;
  trend?: number;
  subtitle?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon: Icon, trend, subtitle }) => (
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

interface SessionCardProps {
  date: string;
  duration: string;
  focus: string;
  onPress?: () => void;

}

const SessionCard: React.FC<SessionCardProps> = ({ date, duration, focus, onPress }) => (
  <TouchableOpacity 
    style={styles.sessionCard}
    onPress={onPress}
  >
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
export default function HomeScreen() {
  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const navigation = useNavigation();

  return (
<ScrollView 
  style={styles.container}
  showsVerticalScrollIndicator={true}
  persistentScrollbar={true}
  scrollIndicatorInsets={{ right: 2 }}
  {...Platform.select({
    android: {
      scrollbarThumbColor: Colors.dark.accent,
      scrollbarTrackColor: 'transparent'
    },
    ios: {
      indicatorStyle: 'white'
    }
  })}
>
{/* Week Overview */}
<View style={styles.section}>
  <Text style={styles.sectionTitle}>Last 7 Days</Text>
  <View style={styles.weekCard}>
    <View style={styles.daysRow}>
      {weekDays.map((day, index) => (
        <View key={index} style={styles.dayContainer}>
          <View style={[styles.dayCircle, index === 2 && styles.activeDayCircle]}>
            <Text style={styles.dayNumber}>{index + 1}</Text>
          </View>
          <Text style={styles.dayText}>{day}</Text>
        </View>
      ))}
    </View>
  </View>
</View>

      {/* Metrics Grid */}
      <View style={styles.metricsGrid}>
        <MetricCard title="Progression" value="78%" icon={TrendingUp} trend={12}  />
        <MetricCard title="Energy Level" value="85%" icon={Heart} trend={-5}  />
        <MetricCard title="Enjoyement" value="92%" icon={Smile} trend={8} /> 
        <MetricCard title="Consistency" value="3.5" icon={Calendar} subtitle="avg/week"  />
      </View>

      {/* Next Session Focus */}
      <View style={styles.section}>
  <Text style={styles.sectionTitle}>Next Session Focus</Text>
  <View style={styles.focusCard}>
    <Text style={styles.focusTitle}>Defense Practice</Text>
    <Text style={styles.focusDescription}>
      Focus on slip & roll drills for 10 minutes each session
    </Text>
    <TouchableOpacity 
      style={styles.startButton}
      onPress={() => router.push('/modal/new-session')}
    >
      <Text style={styles.startButtonText}>Start Session</Text>
    </TouchableOpacity>
  </View>
</View>

      {/* Previous Sessions */}
      <View style={[styles.section, {marginBottom: 100}]}>
        <Text style={styles.sectionTitle}>Previous Sessions</Text>
        <SessionCard date="Today" duration="45 min" focus="Head movement & defense" onPress={() => router.push('/modal/new-session')} />
        <SessionCard date="Yesterday" duration="60 min" focus="Combinations & footwork" onPress={() => router.push('/modal/new-session')} />
        <SessionCard date="2 days ago" duration="30 min" focus="Shadow boxing" onPress={() => router.push('/modal/new-session')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    marginBottom: 20,
  },
  scrollContent: {
    paddingBottom: 100, // Pour éviter que le dernier élément ne soit caché par la bottom nav
  },
  weekCard: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(117, 117, 117, 0.2)',
    backgroundColor: 'rgba(6, 8, 21, 0.9)',
  },
  
  // Modifier ces styles existants
  weekContainer: {
    padding: 16,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // Supprimer marginBottom car maintenant c'est dans une carte
  },
  dayContainer: {
    alignItems: 'center',
  },

headerRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
cardHeader: {
  paddingHorizontal: 16,
  paddingTop: 16,
  paddingBottom: 20, // Augmenté pour plus d'espace
},
titleContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8, // Espace entre l'icône et le texte
},
cardTitle: {
  fontSize: 18,
  fontWeight: '600',
  color: Colors.dark.text,
},

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.dark.text,
    marginBottom: 12,
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
  metricsGrid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  metricCard: {
    flex: 1,
    minWidth: '45%',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(117, 117, 117, 0.2)',
    backgroundColor: 'rgba(6, 8, 21, 0.9)',
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
  section: {
    padding: 16,
  },
  focusCard: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(117, 117, 117, 0.2)',
    backgroundColor: 'rgba(6, 8, 21, 0.9)',
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

  sessionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(117, 117, 117, 0.2)',
    backgroundColor: 'rgba(6, 8, 21, 0.9)',
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



  
});