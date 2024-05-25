// addGym.js
import { db, collection, addDoc, serverTimestamp } from './firebaseConfig';

const addGym = async (name, location, capacity) => {
  try {
    const docRef = await addDoc(collection(db, 'gyms'), {
      name: name.toString(),   // Ensuring name is a string
      location: location.toString(), // Ensuring location is a string
      capacity: Number(capacity), // Ensuring capacity is a number
      createdAt: serverTimestamp(), // Adding a timestamp
    });
    console.log('Gym added with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding gym: ', error);
  }
};

export default addGym;
