import {View, Text, TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native';
import React, { useState} from 'react';

const ThirdPage = ({profileData, handleChange, nextStep, prevStep}) => {

    const [showTextInput, setShowTextInput] = useState(false);
  const [customGender, setCustomGender] = useState('');

  const handleOtherOption = () => {
    setShowTextInput(true);
  };

  const handleSubmit = () => {
    handleChange('gender', customGender);
    setCustomGender('');
    setShowTextInput(false);
  };

    return (
        <View style={styles.container}>
          <Text style={styles.headerText}>What is your gender?</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleChange('gender', 'woman')}>
              <Text style={styles.optionText}>Woman</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleChange('gender', 'gender non-binary')}>
              <Text style={styles.optionText}>Non-binary</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={handleOtherOption}>
          <Text style={styles.optionText}>Other </Text>
        </TouchableOpacity>
      </View>
      {showTextInput && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your gender"
            value={customGender}
            onChangeText={setCustomGender}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={prevStep} style={styles.button}>
          <Text style={styles.buttonText}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextStep} style={styles.button}>
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
        optionButton: {
          width: '100%',
          padding: 15,
          backgroundColor: '#e0e0e0',
          borderRadius: 10,
          alignItems: 'center',
          marginVertical: 5,
        },
        optionText: {
          fontSize: 18,
        },
        inputContainer: {
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

export default ThirdPage;
