import { ScrollView, View, Text, Platform } from 'react-native';
import { TrendingUp, Heart, Calendar, Smile } from 'lucide-react-native';
import { router } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { MetricCard } from '../../components/home/MetricCard';
import { SessionCard } from '../../components/home/SessionCard';
import { WeekOverview } from '../../components/home/WeekOverview';
import { NextSessionFocus } from '../../components/home/NextSessionFocus';
import { styles } from '../../styles/home.styles';

export default function HomeScreen() {
  const mockDays = [
    { day: 'M', isActive: false },
    { day: 'T', isActive: true },
    { day: 'W', isActive: true }, 
    { day: 'T', isActive: false },
    { day: 'F', isActive: false },
    { day: 'S', isActive: true },
    { day: 'S', isActive: false },
  ];

  const weekDays = mockDays.map(day => day.day);
  const activeDaysIndices = mockDays
    .map((day, index) => (day.isActive ? index : -1))
    .filter(index => index !== -1); // Get indices of active days

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
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
      <WeekOverview days={weekDays} activeDaysIndices={activeDaysIndices} />
      
      <View style={styles.metricsGrid}>
        <MetricCard title="Progression" value="78%" icon={TrendingUp} trend={12} />
        <MetricCard title="Energy Level" value="85%" icon={Heart} trend={-5} />
        <MetricCard title="Enjoyement" value="92%" icon={Smile} trend={8} />
        <MetricCard title="Consistency" value="3.5" icon={Calendar} subtitle="avg/week" />
      </View>

      <NextSessionFocus onStartSession={() => router.push('/modal/new-session')} />

      <View style={[styles.section, {marginBottom: 100}]}>
        <Text style={styles.sectionTitle}>Previous Sessions</Text>
        {previousSessions.map((session, index) => (
          <SessionCard 
            key={index}
            {...session}
            onPress={() => router.push('/modal/new-session')}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const previousSessions = [
  { date: "Today", duration: "45 min", focus: "Head movement & defense" },
  { date: "Yesterday", duration: "60 min", focus: "Combinations & footwork" },
  { date: "2 days ago", duration: "30 min", focus: "Shadow boxing" }
];