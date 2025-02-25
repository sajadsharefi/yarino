import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InfoBox = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("انتخاب کنید");
  
  const data = [
    { id: '1', label: 'Java' },
    { id: '2', label: 'JavaScript' },
    { id: '3', label: 'Python' },
    { id: '4', label: 'C++' },
  ];

  const handleSelect = (item) => {
    setSelectedValue(item.label);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>زبان برنامه‌نویسی</Text>
        <TouchableOpacity onPress={() => setDropdownVisible(!isDropdownVisible)} style={styles.dropdownButton}>
          <TextInput
            value={selectedValue}
            editable={false}
            style={styles.input}
          />
          <Ionicons style={styles.icon} name="chevron-down-outline" size={24} color="black" />
        </TouchableOpacity>

        {isDropdownVisible && (
          <View style={styles.dropdown}>
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelect(item)} style={styles.item}>
                  <Text style={styles.itemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingBottom: 10,
    position: 'relative',
  },
  label: {
    position: 'absolute',
    top: -10,
    right: 20,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    fontSize: 14,
    color: 'black',
  },
  dropdownButton: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    marginLeft: 10, // فاصله بین متن و آیکون
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  dropdown: {
    marginTop: 5,
    maxHeight: 150,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});

export default InfoBox;