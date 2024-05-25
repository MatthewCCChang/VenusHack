import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const SeventhPage = ({ profileData, handleChange, nextStep, prevStep}) => {
  const [fitnessGoals, setFitnessGoals] = useState([]);
  
  const toggleGoal = (goal) => {
    setFitnessGoals(prevState =>
      prevState.includes(goal)
        ? prevState.filter(item => item !== goal)
        : [...prevState, goal]
    );
  };

  const handleSubmit = () => {
    handleChange('fitnessGoals', fitnessGoals);
    nextStep();
    //actually should create a user
  };

  const fitnessGoalsOptions = [
    'Losing Weight', 'Gaining Muscle', 'Improving Endurance', 
    'Enhancing Flexibility', 'Overall Health', 'Specific Sport Training'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>What are your fitness goals?</Text>
      <View style={styles.optionsContainer}>
        {fitnessGoalsOptions.map((goal, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              fitnessGoals.includes(goal) && styles.selectedOptionButton
            ]}
            onPress={() => toggleGoal(goal)}
          >
            <Text style={styles.optionText}>{goal}</Text>
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
    marginTop: '15%',
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  optionButton: {
    width: '80%',
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

export default SeventhPage;
