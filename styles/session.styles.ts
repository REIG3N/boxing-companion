import { StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

export const styles = StyleSheet.create({
  // Styles communs
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.dark.text,
    marginBottom: 12,
  },
  
  // Styles pour l'évaluation
  validationContainer: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(6, 8, 21, 0.9)',
    borderWidth: 1,
    borderColor: 'rgba(117, 117, 117, 0.2)',
  },
  validationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  validationTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  validationMetric: {
    fontSize: 14,
    color: Colors.dark.text,
    marginBottom: 16,
  },
  validationLabel: {
    fontSize: 14,
    color: Colors.dark.accent,
    marginBottom: 8,
  },
  
  // Styles pour les boutons
  movementButtonsContainer: {
    gap: 8,
  },
  movementButton: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  selectedMovement: {
    backgroundColor: `${Colors.dark.primary}1A`,
    borderColor: Colors.dark.primary,
  },
  unselectedMovement: {
    backgroundColor: 'transparent',
    borderColor: 'rgba(117, 117, 117, 0.2)',
  },
  movementButtonText: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  selectedMovementText: {
    color: Colors.dark.primary,
  },
  unselectedMovementText: {
    color: Colors.dark.text,
  },
  movementDescription: {
    fontSize: 12,
    color: Colors.dark.accent,
  },
  
  // Styles pour les notes
  contextLabel: {
    fontSize: 14,
    color: Colors.dark.accent,
    marginBottom: 8,
  },
  contextInput: {
    borderWidth: 1,
    borderColor: 'rgba(117, 117, 117, 0.2)',
    borderRadius: 8,
    padding: 12,
    color: Colors.dark.text,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    height: 80,
  },
}); 