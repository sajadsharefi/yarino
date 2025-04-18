import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Keyboard } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { useNavigation, useRoute } from '@react-navigation/native';

const db = SQLite.openDatabase(
  { name: 'data.db', location: 'default' },
  () => {},
  error => {
    console.error(error);
  }
);

const TranScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // متغیرهای محلی برای ورودی‌ها
  const [input1, setInput1] = useState(''); // تاریخ
  const [input2, setInput2] = useState(''); // مبلغ
  const [input3, setInput3] = useState(''); // از حساب
  const [input4, setInput4] = useState(''); // به حساب
  const [input5, setInput5] = useState(''); // توضیحات

  // بارگذاری داده‌ها از SQLite
  const loadData = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM transactions LIMIT 1',
        [],
        (_, results) => {
          if (results.rows.length > 0) {
            const row = results.rows.item(0);
            setInput1(row.input1 || '');
            setInput2(row.input2 || '');
            setInput3(row.input3 || '');
            setInput4(row.input4 || '');
            setInput5(row.input5 || '');
          }
        },
        error => {
          console.error("Error loading data:", error);
        }
      );
    });
  };

  // به‌روزرسانی داده‌ها در SQLite
  const updateData = () => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT OR REPLACE INTO transactions (id, input1, input2, input3, input4, input5) VALUES (1, ?, ?, ?, ?, ?)',
        [input1, input2, input3, input4, input5],
        () => {
          console.log("Data updated successfully");
        },
        error => {
          console.error("Error updating data:", error);
        }
      );
    });
  };

  // دریافت پارامترها از صفحات دیگر
  useEffect(() => {
    loadData(); // بارگذاری داده‌ها

    if (route.params) {
      const { sourceBank, sourceExpense, sourceIncome, destinationBank, destinationExpense, destinationIncome } = route.params;

      if (sourceBank) setInput3(sourceBank);
      if (sourceExpense) setInput3(sourceExpense);
      if (sourceIncome) setInput3(sourceIncome);
      if (destinationBank) setInput4(destinationBank);
      if (destinationExpense) setInput4(destinationExpense);
      if (destinationIncome) setInput4(destinationIncome);
    }

    return () => {
      // داده‌ها تنها در صورت تصمیم کاربر به ثبت، به‌روزرسانی می‌شوند
    };
  }, [route.params]);

  const showAlert = () => {
    const amount = parseFloat(input2);

    if (!input1 || !input2 || !input3 || !input4 || !input5) {
      Alert.alert("خطا", "لطفا همه فیلدها را پر کنید.");
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      Alert.alert("خطا", "مبلغ باید یک عدد مثبت باشد.");
      return;
    }

    Alert.alert("ورودی‌ها", `1: ${input1}\n2: ${input2}\n3: ${input3}\n4: ${input4}\n5: ${input5}`, [{
      text: "ثبت", onPress: () => {
        updateData(); // به‌روزرسانی داده‌ها در پایگاه داده
        Keyboard.dismiss();
      }
    }, { text: "انصراف", style: "cancel" }]);
  };

  const openCalendar = () => {
    navigation.navigate('Calendar', { onDateSelect: setInput1 });
  };

  const openAccount = () => {
    navigation.navigate('FromScreen', { onSelect: setInput3 });
  };

  const openHesab = () => {
    navigation.navigate('ToScreen', { onSelect: setInput4 });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>اطلاعات تراکنش را وارد کنید</Text>
      <TextInput
        style={styles.input}
        value={input1}
        onChangeText={setInput1}
        onFocus={openCalendar}
        placeholder="تاریخ"
      />
      <TextInput
        style={styles.input}
        value={input2}
        onChangeText={setInput2}
        placeholder="مبلغ"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={input3}
        onChangeText={setInput3}
        placeholder="از حساب"
        onFocus={openAccount}
      />
      <TextInput
        style={styles.input}
        value={input4}
        onChangeText={setInput4}
        placeholder="به حساب"
        onFocus={openHesab}
      />
      <TextInput
        style={styles.input}
        value={input5}
        onChangeText={setInput5}
        placeholder="توضیحات"
      />
      <Button title="ثبت" onPress={showAlert} color="#007BFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    padding: 10,
    borderRadius: 5,
  },
});

export default TranScreen;