import { StyleSheet, View, Text, Image, Modal } from "react-native";
import React, { useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "../../Utils/Colors";
import FilterPage from "./Filter";

export default function Header({
  placeList,
  options,
  onFilter,
  onClearFilter,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const { user } = useUser();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: user?.imageUrl }}
        style={{ width: 45, height: 45, borderRadius: 99 }}
      />
      <Image
        source={require("./../../../assets/images/logo.png")}
        style={{ width: 200, height: 45, objectFit: "contain" }}
      />
      <FontAwesome
        name="filter"
        size={24}
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
