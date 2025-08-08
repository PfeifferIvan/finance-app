import Colors from "@/constants/Colors";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  data: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
};

export default function CustomPickerModal({
  data,
  selectedValue,
  onSelect,
}: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [tempValue, setTempValue] = useState(selectedValue);

  const handleConfirm = () => {
    setModalVisible(false);
    onSelect(tempValue);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          {tempValue || "Select Transaction Type"}
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select a type</Text>

            <Picker
              selectedValue={tempValue}
              onValueChange={(itemValue) => setTempValue(itemValue)}
              style={styles.picker}
            >
              {data.map((item) => (
                <Picker.Item label={item} value={item} key={item} />
              ))}
            </Picker>

            <View style={styles.modalButtons}>
              <Pressable onPress={() => setModalVisible(false)}>
                <Text style={styles.cancel}>Cancel</Text>
              </Pressable>
              <Pressable onPress={handleConfirm}>
                <Text style={styles.confirm}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 4,
    backgroundColor: Colors.input,
    borderRadius: 8,
    justifyContent: "center",
    marginLeft: 10,
    marginVertical: 4,
    marginHorizontal: 6,
  },
  buttonText: {
    color: Colors.textSecondary,
    fontSize: 18,
    backgroundColor: "transparent",
    opacity: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContent: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    color: Colors.text,
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    color: Colors.text,
    backgroundColor: Colors.card,
    borderRadius: 6,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  cancel: {
    color: Colors.warning,
    fontSize: 16,
    marginRight: 20,
  },
  confirm: {
    color: Colors.income,
    fontSize: 16,
  },
});
