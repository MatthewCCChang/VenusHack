import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const SixthPage = ({ profileData, handleChange, nextStep, prevStep}) => {
  const [interests, setInterests] = useState([]);
  
  const toggleInterest = (interest) => {
    setInterests(prevState =>
      prevState.includes(interest)
        ? prevState.filter(item => item !== interest)
        : [...prevState, interest]
    );
  };

  const handleSubmit = () => {
    handleChange('interests', interests);
    nextStep();
  };

  const interestOptions = [
    'Running', , 'Yoga', 'Swimming', 'Biking', 
    'Martial Arts', 'Calisthenics', 'Weight Lifting', 'Rock Climbing'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>What exercises are you interested in?</Text>
      <View style={styles.optionsContainer}>
        {interestOptions.map((interest, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              interests.includes(interest) && styles.selectedOptionButton
            ]}
            onPress={() => toggleInterest(interest)}
          >
            <Text style={styles.optionText}>{interest}</Text>
          </TouchableOpacity>
        ))}
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
    flex: 1,
    marginTop: '35%',
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
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  optionButton: {
    width: '48%',
    padding: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  selectedOptionButton: {
    backgroundColor: '#FFC0CB',
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center', // Ensure text is centered
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

export default SixthPage;
