import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const TextBox = () => {
  const [address, setAddress] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>آدرس:</Text>
        <TextInput
          style={styles.textarea}
          value={address}
          onChangeText={setAddress}
          multiline={true}
          numberOfLines={4}
          placeholder="تهران، ولیعصر، خیابان زهدی، پلاک 90"
          placeholderTextColor="gray"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 10,
  },
  row: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 100, // ارتفاع باکس متنی
    textAlignVertical: 'top', // متن از بالا شروع شود
  },
});

export default TextBox;