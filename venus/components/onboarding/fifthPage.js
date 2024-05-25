import {View, Text, TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native';
import React, { useState} from 'react';

const FifthPage = ({profileData, handleChange, nextStep, prevStep }) => {

  const handleSubmit = () => {
    handleChange('gender', customGender);
    setCustomGender('');
  };

    return (
        <View style={styles.container}>
          <Text style={styles.headerText}>How Long Have You Been Going to the Gym?</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleChange('gymTime', 0)}>
              <Text style={styles.optionText}>A Couple Months</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleChange('gymTime', 1)}>
              <Text style={styles.optionText}>1 Year</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleChange('gymTime', 2)}>
          <Text style={styles.optionText}>2 Years </Text>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => handleChange('gymTime', 3)}>
          <Text style={styles.optionText}>3 Years </Text>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => handleChange('gymTime', 4)}>
          <Text style={styles.optionText}>4+ Years </Text>
          
        </TouchableOpacity>
        
      </View>
      
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
         marginTop: '55%',
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

export default FifthPage;
