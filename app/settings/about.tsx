import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { router } from 'expo-router';

export default function AboutScreen() {
  const navigateBack = () => {
    router.push('/(tabs)');
  };

  return (
    <ScrollView style={styles.container} accessible={true} accessibilityLabel="About Screen">
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack} style={styles.backButton}>
          <ChevronLeft size={24} color="#edaa18" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title} accessibilityRole="header">
        About Boxing Companion
      </Text>
      <Text style={styles.description}>
        Boxing Companion is your dedicated app for tracking and improving your boxing skills. 
        Follow your sessions, analyze your performance, and achieve your goals with ease.
      </Text>

      <View>
        <Text style={styles.subtitle}>Our Vision</Text>
        <Text style={styles.description}>
          Boxing Companion is designed to revolutionize your boxing training. 
          We believe that every fighter is unique, and the path to mastery is not about following rigid routines, 
          but discovering your own style through guided and intelligent exploration.
        </Text>
      </View>

      <View>
        <Text style={styles.subtitle}>What Makes Us Different</Text>
        <Text style={styles.description}>
          Unlike traditional boxing apps that focus on fixed combinations and strict techniques, 
          Boxing Companion adopts the Constraints-Led Approach (CLA). 
          This means we help you develop your skills naturally by creating the right learning environment, 
          rather than dictating every movement.
        </Text>
      </View>

      <View>
        <Text style={styles.subtitle}>How It Works</Text>
        <Text style={styles.description}>
          <Text style={styles.bold}>Smart Progress Tracking:</Text> 
          Track your journey with relevant metrics. 
          From session quality to energy levels, we help you understand your development in real-time.
        </Text>
        <Text style={styles.description}>
          <Text style={styles.bold}>Adaptive Training Focus:</Text> 
          Your training evolves with you. 
          Based on your feedback and progress, we suggest personalized focus areas to help you improve naturally.
        </Text>
        <Text style={styles.description}>
          <Text style={styles.bold}>SWOT Analysis:</Text> 
          Gain clear insights into your Strengths, Weaknesses, Opportunities, and Threats as a boxer. 
          We help you understand where you excel and where you can progress.
        </Text>
        <Text style={styles.description}>
          <Text style={styles.bold}>Guided Discovery:</Text> 
          Instead of rigid drills, we provide intelligent constraints and incentives that help you explore and develop your own effective solutions in the ring.
        </Text>
      </View>

      <View>
        <Text style={styles.subtitle}>Our Philosophy</Text>
        <Text style={styles.description}>
          We believe that great boxers are not made by memorizing combinations, 
          but by developing their understanding, exploration, and intelligent practice. 
          Boxing Companion is designed to support this natural development process, 
          helping you become not only a better boxer but a smarter fighter.
        </Text>
      </View>

      <View>
        <Text style={styles.subtitle}>Who Is This For?</Text>
        <Text style={styles.description}>
          Whether you're a beginner or looking to refine your skills, 
          Boxing Companion adapts to your level. 
          Our app is perfect for:
        </Text>
        <Text style={styles.bulletPoint}>- Beginners seeking structured guidance</Text>
        <Text style={styles.bulletPoint}>- Intermediate boxers wanting to develop their style</Text>
        <Text style={styles.bulletPoint}>- Advanced fighters tracking their progress</Text>
        <Text style={styles.bulletPoint}>- Anyone who believes in learning through understanding rather than mere repetition</Text>
      </View>

      <View>
        <Text style={styles.subtitle}>Join the Journey</Text>
        <Text style={styles.description}>
          Ready to transform your boxing practice? 
          Start your journey with Boxing Companion today and discover a smarter way to train.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#060815',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#edaa18',
    fontSize: 16,
    marginLeft: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#edaa18',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#edaa18',
    marginTop: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 22,
    marginBottom: 12,
  },
  bold: {
    fontWeight: 'bold',
  },
  bulletPoint: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 22,
    marginLeft: 20,
  },
});


