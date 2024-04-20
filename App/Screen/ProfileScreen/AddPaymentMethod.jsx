import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AddPaymentMethod({ route }) {
    const { placeAddress } = route.params;
    const fixedPrice = 18.94; // Fixed price per unit in rupees
    const [units, setUnits] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalPrice = () => {
        // Calculate the total bill by multiplying the fixed price and input units
        const total = fixedPrice * units;
        setTotalPrice(total);
    };

    const handlePay = () => {
        // Handle payment action here
        // This function will be called when the user clicks on the "Pay" button
        console.log('Payment completed');
        // You can implement the payment logic here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Payment Method</Text>
            <View style={styles.addressContainer}>
                <MaterialIcons name="location-on" size={24} color="#2F80ED" style={styles.icon} />
                <Text style={styles.addressText}>Place Address: {placeAddress}</Text>
            </View>
            <Text style={styles.priceText}>Fixed Price: ₹{fixedPrice.toFixed(2)}</Text>
            <TextInput
                placeholder="Enter units needed to charge"
                keyboardType="numeric"
                onChangeText={text => setUnits(parseInt(text) || 0)}
                style={styles.input}
            />
            <Button title="Calculate Total Price" onPress={calculateTotalPrice} />
            <Text style={styles.totalPrice}>Total Price: ₹{totalPrice.toFixed(2)}</Text>
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
