import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const auth = getAuth();
    try {
      console.log('Attempting login...');
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful:', userCredential.user.uid);
      router.replace('/(tabs)'); // Ajout de cette ligne pour forcer la redirection

      // No need to navigate - _layout.tsx will handle this
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boxing Companion</Text>
      
      <TextInput 
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#757575"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput 
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#757575"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => router.push('/auth/register')}
        style={styles.linkButton}
      >
        <Text style={styles.linkText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#060815',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: 'rgba(117, 117, 117, 0.1)',
    padding: 15,
    borderRadius: 8,
    marginBottom: 16,
    color: '#ffffff',
    borderWidth: 1,
    borderColor: '#757575',
  },
  button: {
    backgroundColor: '#fa2d2d',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkButton: {
    padding: 15,
    alignItems: 'center',
  },
  linkText: {
    color: '#edaa18',
    fontSize: 16,
  }
});