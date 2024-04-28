import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native';

export default function AddPaymentMethod({ route }) {
    const { placeAddress } = route.params;
    //const fixedPrice = 18.94; // Fixed price per unit in rupees
    //const [units, setUnits] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigation = useNavigation(); // Get navigation object using useNavigation hook

    const calculateTotalPrice = () => {
        let total = 0;
        switch (placeAddress) {
            case 'BMW Deutsche Motoren | Noida':
                total ='1000';
                break;
            case 'Electric Vehicle Charging Station':
                total ='2000';
                break;
            case 'A.R.S HERO ELECTRIC-NOIDA':
                total ='3000' ;
                break;
            case 'EarthtronEV Charging Station':
                total ='2200' ;
                break;
            case 'Ather Grid Charging Station':
                total ='1500' ;
                break;
            case 'Ather Charging Station':
                total ='1500' ;
                break;
            default:
                // Default case if placeAddress doesn't match any specific case
                total = 2000;
                break;
        }
        setTotalPrice(total);
    };

    const handlePay = () => {
        // Navigate to a new screen to collect card details
        // navigation.navigate('cardDetails', { totalPrice }); // Pass totalPrice as a parameter if needed
        switch (totalPrice) {
            case '1000':
                Linking.openURL('https://rzp.io/i/VM5x1FkBdt');
                break;
            case '1500':
                Linking.openURL('https://rzp.io/i/BqI3KRL');
                break;
            case '2000':
                Linking.openURL('https://rzp.io/i/3gfIzdxT');
                break;
            case '2200':
                Linking.openURL('https://rzp.io/i/ceaRy0OY5s');
                break;
            case '3000':
                Linking.openURL('https://rzp.io/i/R4HRBxft0e');
                break;
            default:
                Linking.openURL('https://rzp.io/i/PB925vHe6g');
                break;
            

        }
        
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Payment Method</Text>
            <View style={styles.addressContainer}>
                <MaterialIcons name="location-on" size={24} color="#2F80ED" style={styles.icon} />
                <Text style={styles.addressText}>Place: {placeAddress}</Text>
            </View>
            {/* <Text style={styles.priceText}>Fixed Price: ₹{fixedPrice.toFixed(2)}</Text> */}
            {/* <TextInput
                placeholder="Enter units needed to charge"
                keyboardType="numeric"
                onChangeText={text => setUnits(parseInt(text) || 0)}
                style={styles.input}
            /> */}
            <Button title="Calculate Bill" onPress={calculateTotalPrice} /> 
            <Text style={styles.totalPrice}>Total Price: ₹{totalPrice}</Text>
            <Button title="Pay" onPress={handlePay} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 20, // Margin from the top
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'Arial', // Example font family
        color: '#333', // Example text color
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        marginRight: 10,
    },
    addressText: {
        fontSize: 16,
        color: '#555', // Example text color
    },
    priceText: {
        fontSize: 16,
        marginBottom: 10,
        fontFamily: 'Arial', // Example font family
        color: '#555', // Example text color
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    totalPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        fontFamily: 'Arial', // Example font family
        color: '#333', // Example text color
    },
});

// const styles = StyleSheet.create({
//    /* Styles for the container */
// container: {
//     display: flex,
//     flexDirection: column,
//     alignItems: center,
//     padding: 20,
// },

// /* Styles for the title */
// title :{
//     fontSize: 24;
//     fontWeight: bold;
//     margin-bottom: 10px;
// }

// /* Styles for the address container */
// addressContainer {
//     display: flex;
//     align-items: center;
//     margin-top: 10px;
// }

// /* Styles for the icon */
// .icon {
//     margin-right: 5px;
// }

// /* Styles for the address text */
// .addressText {
//     font-size: 16px;
// }

// /* Styles for the price text */
// .priceText {
//     font-size: 18px;
//     margin-top: 10px;
// }

// /* Styles for the input */
// .input {
//     width: 200px;
//     height: 40px;
//     padding: 5px;
//     margin-top: 10px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
// }

// /* Styles for the total price */
// .totalPrice {
//     font-size: 20px;
//     font-weight: bold;
//     margin-top: 20px;
// }

// /* Styles for the button */
// button {
//     padding: 10px 20px;
//     background-color: #2F80ED;
//     color: #fff;
//     border: none;
//     border-radius: 5px;
//     margin-top: 20px;
//     cursor: pointer;
// }

// button:hover {
//     background-color: #1E63B8;
// }
//   });
  
