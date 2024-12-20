import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    padding: 8,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  header: {
    backgroundColor: 'rgba(6, 8, 21, 0.9)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: `${Colors.dark.accent}33`,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.dark.text,
  },
  card: {
    backgroundColor: 'rgba(6, 8, 21, 0.9)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: `${Colors.dark.accent}33`,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: `${Colors.dark.accent}33`,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.dark.text,
  },
  logoutButton: {
    borderBottomWidth: 0,
  },
  logoutText: {
    color: Colors.dark.primary,
  },
  userInfo: {
    marginTop: 8,
  },
  userEmail: {
    fontSize: 14,
    color: Colors.dark.accent,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});