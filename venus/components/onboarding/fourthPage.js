import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const FourthPage = ({ profileData, handleChange, nextStep, prevStep }) => {
  const [age, setAge] = useState('');

  const handleSubmit = () => {
    if (!age) {
      alert('Please enter your age');
      return;
    }
    handleChange('age', age);
    nextStep();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>What is your age?</Text>
      <View style={styles.optionsContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={prevStep} style={styles.button}>
          <Text style={styles.buttonText}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '60%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  optionsContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 40,
  },
  textInput: {
    width: '100%',
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 30,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default FourthPage;
