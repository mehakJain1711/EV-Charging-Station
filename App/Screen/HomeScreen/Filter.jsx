import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const FilterPage = ({ placeList, onFilter, onCloseModal }) => {
  const [connectorCount, setConnectorCount] = useState();
  const [options, setOptions] = useState([]);
  const [selectedType, setSelectedType] = useState();

  useEffect(() => {
    const newOptions = placeList.reduce((acc, item) => {
      const value = item?.evChargeOptions?.connectorAggregation[0]?.type;
      if (value && !acc.includes(value)) {
        acc.push(value);
      }
      return acc;
    }, []);
    if (newOptions) setOptions(newOptions);
  }, [placeList]);

  const handleConnectorCountChange = (value) => {
    if (parseInt(value) >= 1 || value === "") {
      setConnectorCount(value);
    }
  };

  const handleSelectedType = (value) => {
    setSelectedType(value);
  };

  const handleFilter = () => {
    onFilter({ selectedType, connectorCount });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Number of Connectors:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={handleConnectorCountChange}
        value={connectorCount}
      />
      <Text style={styles.label}>Select Charging Station Type:</Text>
      <Picker
        style={styles.input}
        selectedValue={selectedType}
        onValueChange={handleSelectedType}
      >
        {options.map((item, index) => (
          <Picker.Item key={index} label={item} value={item} />
        ))}
      </Picker>
      <Button title="Filter" onPress={handleFilter} />
      <Button title="Close" onPress={onCloseModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingLeft: 60,
    paddingRight: 60,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default FilterPage;
