import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal,Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SignOut from './SignOut';
//import DeleteAccount from './DeleteAccount';
import AddPayment from './AddPaymentMethod';
import AddReview from './AddReview';
import { useUser } from "@clerk/clerk-expo";
import { useNavigation } from '@react-navigation/native';


const ProfileScreen = (props) => {
 // const navigation = useNavigation();
  const [activeScreen, setActiveScreen] = useState(null);
  const { user } = useUser();
 

  const renderScreen = (screen) => {
    switch (screen) {
      case 'SignOut':
        return <SignOut />;
      case 'DeleteAccount':
        return <SignOut />;
      //case 'AddPayment':
        //return <AddPayment />;
      case 'AddReview':
        return <AddReview />;
      default:
        return null;
    }
  };

  const showPaymentPage = () => {    
      navigation.navigate('paymentMethod');
  }
  const sendEmail = () => {
    const email = 'mehakjain1711@gmail.com'; // Replace with your email
    const subject = 'Feedback from App User'; // Email subject
    const body = 'Please share your feedback here:'; // Prompt for feedback
    
    const mailToUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    Linking.openURL(mailToUrl);
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, {user.firstName}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setActiveScreen('SignOut')}>
        <Text style={styles.buttonText}>Sign Out</Text>
        <AntDesign name="logout" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setActiveScreen('SignOut')}>
        <Text style={styles.buttonText}>Delete Account</Text>
        <AntDesign name="deleteuser" size={24} color="black" />
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button} onPress={() => showPaymentPage()}>
        <Text style={styles.buttonText}>Add Payment Method</Text>
        <AntDesign name="creditcard" size={24} color="black" />
      </TouchableOpacity> */}
      {/* <TouchableOpacity style={styles.button} onPress={() => setActiveScreen('AddReview')}>
        <Text style={styles.buttonText}>Add Review</Text>
        <AntDesign name="edit" size={24} color="black" />
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.button} onPress={sendEmail}>
                <Text style={styles.buttonText}>Add Review</Text>
                <AntDesign name="edit" size={24} color="black" />
            </TouchableOpacity>

      {/* Render the active screen */}
      {activeScreen && renderScreen(activeScreen)}
      {/* <Modal><Text>jhjkhkj</Text></Modal> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 0.25, // For iOS shadow
    shadowRadius: 3.84, // For iOS shadow
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',

  },
});

export default ProfileScreen;


