import { StyleSheet, View, Text, Image, Modal, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

import Colors from "../../Utils/Colors";
import FilterPage from "./Filter";

export default function Header({
  placeList,
  options,
  onFilter,
  onClearFilter,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation(); // Get navigation object

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const { user } = useUser();
  return (
    <View style={styles.container}>
      {/* Make Image pressable */}
      <TouchableWithoutFeedback onPress={() => navigation.navigate('profile')}>
        <Image
          source={{ uri: user?.imageUrl }}
          style={{ width: 55, height: 55, borderRadius: 99 }}
        />
      </TouchableWithoutFeedback>
      <Image
        source={require("./../../../assets/images/logo.png")}
        style={{ width: 180, height: 60, top:5, borderRadius:10 }}
      />
      <FontAwesome
        name="filter"
        size={30}
        color="black"
        onPress={toggleModal}
      />
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FilterPage
              placeList={placeList}
              options={options}
              onFilter={({ selectedType, connectorCount }) => {
                onFilter({ selectedType, connectorCount });
                toggleModal();
              }}
              onClearFilter={() => {
                onClearFilter();
                toggleModal();
              }}
              onCloseModal={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
