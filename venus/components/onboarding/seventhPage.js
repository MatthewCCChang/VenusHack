import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';

const SeventhPage = ({ profileData, handleChange, nextStep, prevStep }) => {
  const [fitnessGoals, setFitnessGoals] = useState(profileData.fitnessGoals || []);

  const toggleGoal = (goal) => {
    setFitnessGoals((prevState) =>
      prevState.includes(goal)
        ? prevState.filter((item) => item !== goal)
        : [...prevState, goal]
    );
  };

  const handleSubmit = () => {
    handleChange("fitnessGoals", fitnessGoals);
    nextStep();
    // actually should create a user
  };

  const fitnessGoalsOptions = [
    "Losing Weight",
    "Gaining Muscle",
    "Improving Endurance",
    "Enhancing Flexibility",
    "Overall Health",
    "Specific Sport Training",
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
              fitnessGoals.includes(goal) && styles.selectedOptionButton,
            ]}
            onPress={() => toggleGoal(goal)}
          >
            <Text
              style={[
                styles.optionText,
                fitnessGoals.includes(goal) && styles.selectedOptionText,
              ]}
            >
              {goal}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={prevStep} style={styles.arrowButton}>
          <Icon name="long-arrow-alt-left" style={styles.arrowButtonText} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit} style={styles.arrowButton2}>
          <Icon name="long-arrow-alt-right" style={styles.arrowButtonText2} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 40,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Avenir',
  },
  optionsContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    
  },
  optionButton: {
    width: "60%",
    padding: 15,
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1.5,
    elevation: 4, // For Android
  },
  
  selectedOptionButton: {
    backgroundColor: "#3A15CE",
    borderColor: "#3A15CE",
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: 'bold',
    color: 'black', // Unselected text color
    fontFamily: 'Avenir',
  },
  selectedOptionText: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    color: 'white'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    backgroundColor: 'white',
  },

  
  
  arrowButton: {
    width: 80,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 10,
    
    marginHorizontal: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1.5,
    elevation: 4, // For Android
  },
  arrowButton2: {
    width: 80,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3A15CE",
    borderColor: "#3A15CE",
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  arrowButtonText2: {
    fontSize: 30,
    color: "white",
  },

  arrowButtonText: {
    fontSize: 30,
    color: "#3A15CE",
  },
});

export default SeventhPage;
