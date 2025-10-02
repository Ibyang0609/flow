// app/(flow)/information.tsx
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function InformationScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  
  const goToReceipt = () => {
    // Navigates to the Points Receipt screen
    router.push('/receipt'); 
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.greenBox}>
        <Text style={styles.headingText}>Great you gain 150 points</Text>
        <Text style={styles.subText}>please input your Name and Contact Number.</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={setName} 
          value={name}
        />

        <Text style={styles.label}>Contact No.</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={setContact} 
          value={contact}
          keyboardType="numeric"
        />
        
        <TouchableOpacity 
          onPress={goToReceipt} 
          style={styles.continueButton}
        >
          <Text style={styles.buttonText}>continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
// Add styles to match the layout from your screenshot!
const styles = StyleSheet.create({
  screenContainer: { flex: 1, 
    backgroundColor: '#ffffffff', 
    padding: 10 },

  greenBox: 
  { backgroundColor: '#80b875', 
    borderRadius: 10, 
    padding: 30, 
    flex: 1, 
    margin: 20 },

  headingText: 
  { fontSize: 24, color: 'white', 
    textAlign: 'center' },
  
  subText: 
  { fontSize: 18, color: 'white', 
    textAlign: 'center', marginBottom: 30 },

  label:
   { fontSize: 16, color: 'white', 
    marginTop: 15 },

  input: 
  { backgroundColor: 'white', height: 40, borderRadius: 5, paddingHorizontal: 10, marginTop: 5 },

  continueButton: 
  { backgroundColor: '#383838', 
    padding: 10, alignSelf: 'flex-end', 
    marginTop: 30, borderRadius: 5 },

  buttonText: { color: 'white', fontWeight: 'bold' }
});