// addGym.js
import {
  db,
  collection,
  doc,
  setDoc,
  getDoc,
  addDoc,
  updateDoc,
  arrayUnion,
  serverTimestamp,
} from "../app/(tabs)/firebaseConfig";

export const addGym = async (id, name, location, rating) => {
  try {
    const docRef = doc(collection(db, "gyms"), id);
    const docs = await getDoc(docRef);
    if (!docs.exists()) {
      await setDoc(docRef, {
        name: name.toString(),
        location: location.toString(),
        // capacity: Number(capacity),
        rating: Number(rating),
      });
      const docRefCon = doc(collection(db, "connections"), id);
      await setDoc(docRefCon, {
        people: [],
      });
      console.log("Gym added with ID: ", docRef.id);
      console.log("Connection added successfully");
    }
  } catch (error) {
    console.error("Error adding gym: ", error);
  }
};

export const addPerson = async (
  firstName,
  lastName,
  age,
  gender,
  gymTime,
  howOften,
  phone,
  email,
  // instagram,
  username,
  interests
) => {
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
      // instagram: instagram.toString(),
      interests: Array.isArray(interests)
        ? interests.map((interest) => interest.toString())
        : [interests.toString()],
      createdAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, "persons"), personData);

    console.log("Person added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding person: ", error);
  }
};

export const addConnection = async (personID, gymID) => {
  try {
    console.log("before adding");
    const gymDocRef = doc(db, "connections", gymID);
    console.log("adding");
    await updateDoc(gymDocRef, {
      people: arrayUnion(personID),
    });
  } catch (error) {
    console.error("Error adding connection: ", error);
  }
};

export const getPerson = async (personID) => {
  try {
    const personRef = doc(db, "persons", personID);
    const info = await getDoc(personRef);
    console.log(info);
    if (info.exists()) {
      return info.data();
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const getOneGym = async (gymID) => {
  try {
    const gymRef = doc(db, "gyms", gymID);
    const info = await getDoc(gymRef);
    console.log(info.data());
    console.log("info above");
    if (info.exists()) {
      return info.data();
    }
    console.log("empty");
  } catch (err) {
    console.log(err.message);
  }
};

export const getConnections = async (gymID) => {
  try {
    const gymDocRef = doc(db, "connections", gymID);
    const gymDoc = await getDoc(gymDocRef);

    if (gymDoc.exists()) {
      const gymData = gymDoc.data();
      const peopleIDs = gymData || [];
      console.log(peopleIDs);
      return peopleIDs.people;
    } else {
      console.log("No such document!");
      return [];
    }
  } catch (error) {
    console.error("Error getting connections: ", error);
    return [];
  }
};

// export default {
//   addGym,
//   getGym,
//   addPerson,
//   addConnection,
//   getPerson,
//   getConnections,
// };