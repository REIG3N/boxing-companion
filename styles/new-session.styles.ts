import { StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '@/constants/Colors';

const baseInput = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderColor: Colors.dark.accent,
  borderWidth: 1,
  borderRadius: 5,
  padding: 12,
  color: Colors.dark.text,
  outline: 'none',
};

const baseLabel = {
  color: Colors.dark.accent,
  marginBottom: 5,
  fontSize: 13,
};

const baseButton: ViewStyle = {
  borderRadius: 5,
  alignItems: 'center',
  padding: 10,
  flex: 1,
  marginHorizontal: 2,
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  modal: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.dark.text,
  },
  closeButton: {
    padding: 5,
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: Colors.dark.accent,
    marginBottom: 5,
  },
  input: {
    ...baseInput,
    height: 45,
  },
  dropdownContainer: {
    marginBottom: 15,
    position: 'relative',
  },
  activeDropdown: {
    zIndex: 1000,
  },
  dropdownButton: {
    padding: 10,
    borderColor: Colors.dark.accent,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownOverlay: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    maxHeight: 200,
    zIndex: 1000,
  },
  dropdownList: {
    width: '100%',
    backgroundColor: Colors.dark.background,
    borderColor: Colors.dark.accent,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    maxHeight: 200,
    overflow: 'scroll',
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownDescription: {
    color: Colors.dark.accent,
    fontSize: 12,
  },
  ratingContainer: {
    marginBottom: 20,
  },
  ratingLabel: {
    color: Colors.dark.accent,
    marginBottom: 5,
  },
  ratingButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingButton: {
    ...baseButton,
  },
  selectedRating: {
    backgroundColor: Colors.dark.primary,
  },
  unselectedRating: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  validationContainer: {
    marginBottom: 12,
    padding: 10,
  },
  validationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  validationIcon: {
    color: Colors.dark.secondary,
    marginRight: 5,
  },
  validationTitle: {
    color: Colors.dark.secondary,
    fontWeight: 'bold',
  },
  validationMetric: {
    color: Colors.dark.accent,
    marginBottom: 6,
    fontSize: 12,
  },
  validationLevels: {
    marginBottom: 8,
  },
  validationLabel: {
    ...baseLabel,
  },
  validationButton: {
    ...baseButton,
  },
  selectedValidation: {
    backgroundColor: Colors.dark.primary + '22',
    borderLeftWidth: 3,
    borderLeftColor: Colors.dark.primary,
  },
  validationButtonText: {
    flex: 1,
    textAlign: 'center',
  },
  unselectedValidation: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderLeftWidth: 3,
    borderLeftColor: 'transparent',
  },
  masteryContainer: {
    marginBottom: 8,
  },
  masteryLabel: {
    ...baseLabel,
    marginBottom: 4,
  },
  masteryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contextLabel: {
    ...baseLabel,
  },
  contextInput: {
    ...baseInput,
    height: 70,
    textAlignVertical: 'top',
    fontSize: 12,
    marginBottom: 0,
  },
  notesButton: {
    marginTop: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notesButtonText: {
    color: Colors.dark.accent,
  },
  notesContainer: {
    marginTop: 10,
  },
  notesLabel: {
    ...baseLabel,
  },
  notesInput: {
    ...baseInput,
    height: 120,
    textAlignVertical: 'top',
    marginBottom: 20,
    fontSize: 13,
  },
  submitButton: {
    ...baseButton,
    backgroundColor: Colors.dark.primary,
    padding: 15,
  },
  submitButtonText: {
    color: Colors.dark.text,
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  tabBar: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 2,
  },
  
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 3,
  },
  
  activeTab: {
    backgroundColor: Colors.dark.primary,
  },
  
  tabText: {
    color: Colors.dark.accent,
  },
  
  activeTabText: {
    color: Colors.dark.text,
    fontWeight: 'bold',
  },
  dropdownButtonText: {
    color: Colors.dark.text,
    flex: 1,
  },
  dropdownItemText: {
    color: Colors.dark.text,
    marginBottom: 2,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
    gap: 4,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    fontSize: 11,
  },
  liveBadge: {
    backgroundColor: Colors.dark.primary + '22',
    color: Colors.dark.primary,
  },
  soloBadge: {
    backgroundColor: Colors.dark.secondary + '22',
    color: Colors.dark.secondary,
  },
  movementButtonsContainer: {
    gap: 8,
  },
  movementButton: {
    ...baseButton,
    padding: 8,
    marginBottom: 6,
  },
  selectedMovement: {
    backgroundColor: Colors.dark.secondary + '22',
    borderLeftWidth: 3,
    borderLeftColor: Colors.dark.secondary,
  },
  unselectedMovement: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderLeftWidth: 3,
    borderLeftColor: 'transparent',
  },
  movementButtonText: {
    fontSize: 14,
    textAlign: 'center',
  },
  selectedMovementText: {
    color: Colors.dark.secondary,
  },
  unselectedMovementText: {
    color: Colors.dark.accent,
  },
  movementDescription: {
    fontSize: 11,
    color: Colors.dark.accent,
    opacity: 0.7,
    marginTop: 2,
    textAlign: 'center',
  },
  assessmentSection: {
    marginBottom: 12,
  },
}); 