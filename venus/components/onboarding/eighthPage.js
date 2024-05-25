import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React from 'react';

const EigthPage = ({ profileData, handleSubmit, prevStep }) => {
  
  const validateFields = () => {
    const { firstName, lastName, username, email, password, age, gender, gymTime, howOften, phone, instagram, interests, fitnessGoals } = profileData;

    if (!firstName || !lastName || !username || !email || !password || !age || !gender || !gymTime || !phone || !interests || !fitnessGoals) {
      Alert.alert('Error', 'All fields are required.');
      return false;
    }
    return true;
  };

  const handleFinalSubmit = () => {
    if (validateFields()) {
      handleSubmit();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Thanks for signing up!</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={prevStep} style={styles.button}>
          <Text style={styles.buttonText}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFinalSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    width: '45%',
    padding: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
});

export default EigthPage;
