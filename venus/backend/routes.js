// addGym.js
import { db, collection, doc, setDoc, getDoc, addDoc, serverTimestamp } from '../app/(tabs)/firebaseConfig';

const addGym = async (id, name, location, capacity, rating) => {
  try {
    const docRef = doc(collection(db, 'gyms'), id);
    await setDoc(docRef, {
      name: name.toString(),     
      location: location.toString(), 
      capacity: Number(capacity),  
      rating: Number(rating),      
    });
    console.log('Gym added with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding gym: ', error);
  }
};

const addPerson = async (firstName, lastName, username, email, age, gender, gymTime, phone, interests, fitnessGoals) => {
  try {
    const personData = {
      firstName: firstName.toString(),
      lastName: lastName.toString(),
      username: username.toString(),
      email: email.toString(),
      age: Number(age),
      gender: gender.toString(),
      gymTime: gymTime.toString(),
      phone: phone.toString(),
      interests: Array.isArray(interests) ? interests.map(interest => interest.toString()) : [interests.toString()],
      fitnessGoals: Array.isArray(fitnessGoals) ? fitnessGoals.map(goal => goal.toString()) : [fitnessGoals.toString()],
    };

    const docRef = await addDoc(collection(db, 'persons'), personData);

    console.log('Person added with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding person: ', error);
  }
};

const addConnection = async (personID, gymID) => {
  try {
    const gymDocRef = doc(db, 'connections', gymID);

    await updateDoc(gymDocRef, {
      people: arrayUnion(personID)
    });

  } catch (error) {
    console.error('Error adding connection: ', error);
  }
};

const getPerson = async (personID) => {
  try{
    const personRef = doc('persons', personID);
    const info = await getDoc(personRef);
    console.log(info);
    if(info.exists()){
      return info.json();
    }
  }catch(err){
    console.log(err.message);
  }
}

const getGym = async (gymID) => {
  try{
    const gymRef = doc('gyms', gymID);
    const info = await getDoc(gymRef);
    
    if(info.exists()){
      return info.json();
    }
  }catch(err){
    console.log(err.message);
  }
}

const getConnections = async (gymID) => {
  try {
    const gymDocRef = doc(db, 'connections', gymID);
    const gymDoc = await getDoc(gymDocRef);

    if (gymDoc.exists()) {
      const gymData = gymDoc.data();
      const peopleIDs = gymData.people || [];

      const peopleDetailsPromises = peopleIDs.map(personID => getPerson(personID));
      const peopleDetails = await Promise.all(peopleDetailsPromises);

      return peopleDetails;
    } else {
      console.log('No such document!');
      return [];
    }
  } catch (error) {
    console.error('Error getting connections: ', error);
    return [];
  }
};

export {addGym, addPerson, addConnection, getPerson, getConnections};
