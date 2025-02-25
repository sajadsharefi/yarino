import React from 'react';
import { View, StyleSheet } from 'react-native';
import TagBox from './TagBox'; // اطمینان حاصل کنید که مسیر درست است

const TestPage = () => {
  return (
    <View style={styles.container}>
      <TagBox 
        label="نیازها"
        description="با کلیک روی هر کدام از نیاز ها، مورد انتخاب شده فعال یا غیرفعال می‌شود."
      />

      <TagBox 
        label="توان‌ها"
        description="با کلیک روی هر کدام از توان‌ها، مورد انتخاب شده فعال یا غیرفعال می‌شود."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default TestPage;