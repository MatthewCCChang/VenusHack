import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../../app/(tabs)/firebaseConfig";
import FirstPage from "./firstPage";
import SecondPage from "./secondPage";
import ThirdPage from "./thirdPage";
import FourthPage from "./fourthPage";
import FifthPage from "./fifthPage";
import SixthPage from "./sixthPage";
import SeventhPage from "./seventhPage";
import EigthPage from "./eighthPage";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { addPerson } from "../../backend/routes";

const ProfileSetUp = ({navigation}) => {
  const [profileData, setProfileData] = useState({
    firstName: null,
    lastName: null,
    username: null,
    email: null,
    password: null,
    age: null,
    gender: null,
    gymTime: null,
    phone: null,
    // instagram: null,
    interests: null,
    fitnessGoals: null,
  });


  const goBack = () => navigation.navigate('SignIn');

  const handleSubmit = async () => {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      age,
      gender,
      gymTime,
      phone,
      interests,
      fitnessGoals,
    } = profileData;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await addPerson(
        firstName,
        lastName,
        username,
        email,
        age,
        gender,
        gymTime,
        phone,
        interests,
        fitnessGoals,
      );
      console.log("User created and data added successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (name, value) => {
    setProfileData((prevStep) => ({ ...prevStep, [name]: value }));
  };

  const stepsComponents = [
    <FirstPage
      key={0}
      profileData={profileData}
      goBack={goBack}
      handleChange={handleChange}
      nextStep={nextStep}
    />,
    <SecondPage
      key={1}
      profileData={profileData}
      handleChange={handleChange}
      nextStep={nextStep}
      prevStep={prevStep}
    />,
    <ThirdPage
      key={2}
      profileData={profileData}
      handleChange={handleChange}
      nextStep={nextStep}
      prevStep={prevStep}
    />,
    <FourthPage
      key={3}
      profileData={profileData}
      handleChange={handleChange}
      nextStep={nextStep}
      prevStep={prevStep}
    />,
    <FifthPage
      key={4}
      profileData={profileData}
      handleChange={handleChange}
      nextStep={nextStep}
      prevStep={prevStep}
    />,
    <SixthPage
      key={5}
      profileData={profileData}
      handleChange={handleChange}
      nextStep={nextStep}
      prevStep={prevStep}
    />,
    <SeventhPage
      key={6}
      profileData={profileData}
      handleChange={handleChange}
      nextStep={nextStep}
      prevStep={prevStep}
    />,
    <EigthPage
      key={7}
      profileData={profileData}
      handleSubmit={handleSubmit}
      prevStep={prevStep}
    />,
  ];

  return <>{stepsComponents[step]}</>;
};

export default ProfileSetUp;
