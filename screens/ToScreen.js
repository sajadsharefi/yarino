import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const db = SQLite.openDatabase(
  { name: 'data.db', location: 'default' },
  () => {},
  error => {
    console.error(error);
  }
);

const  ToScreen = () => {
  const navigation = useNavigation();
  const [showBankContent, setShowBankContent] = useState(false);
  const [showExpenseContent, setShowExpenseContent] = useState(false);
  const [showIncomeContent, setShowIncomeContent] = useState(false);
  const [banks, setBanks] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleBankContent = () => {
    setShowBankContent(!showBankContent);
  };

  const toggleExpenseContent = () => {
    setShowExpenseContent(!showExpenseContent);
  };

  const toggleIncomeContent = () => {
    setShowIncomeContent(!showIncomeContent);
  };

  const fetchBanks = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM banks',
        [],
        (_, results) => {
          let fetchedBanks = [];
          for (let i = 0; i < results.rows.length; i++) {
            fetchedBanks.push(results.rows.item(i));
          }
          setBanks(fetchedBanks);
        },
        error => {
          console.error("Error fetching banks:", error);
        }
      );
    });
  };

  const fetchExpenses = () => {
    setLoading(true);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM expenses',
        [],
        (_, results) => {
          let fetchedExpenses = [];
          for (let i = 0; i < results.rows.length; i++) {
            fetchedExpenses.push(results.rows.item(i));
          }
          setExpenses(fetchedExpenses);
          setLoading(false);
        },
        error => {
          console.error("Error fetching expenses:", error);
          setError("عدم توانایی در بارگذاری هزینه‌ها.");
          setLoading(false);
        }
      );
    });
  };

  const fetchIncomes = () => {
    setLoading(true);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM income',
        [],
        (_, results) => {
          let fetchedIncomes = [];
          for (let i = 0; i < results.rows.length; i++) {
            fetchedIncomes.push(results.rows.item(i));
          }
          setIncomes(fetchedIncomes);
          setLoading(false);
        },
        error => {
          console.error("Error fetching incomes:", error);
          setError("عدم توانایی در بارگذاری درآمدها.");
          setLoading(false);
        }
      );
    });
  };

  const handleSelect = (selectedItem, type) => {
    // تنظیم مقدار انتخاب شده و رفتن به TranScreen
    if (type === 'bank') {
      navigation.navigate('TranScreen', { destinationBank: selectedItem.name });
    } else if (type === 'expense') {
      navigation.navigate('TranScreen', { destinationExpense: selectedItem.description });
    } else if (type === 'income') {
      navigation.navigate('TranScreen', { destinationIncome: selectedItem.source });
    }
  };

  useEffect(() => {
    fetchBanks();
    fetchExpenses();
    fetchIncomes();
  }, []);

  return (
    <View style={styles.container}>
      {/* بخش بانک‌ها */}
      <TouchableOpacity style={styles.box} onPress={toggleBankContent}>
        <View style={styles.toggleButton}>
          <Icon name="chevron-down-outline" size={24} color="black" />
          <Text style={styles.toggleButtonText}>بانک‌ها</Text>
        </View>

        {showBankContent && (
          <FlatList
            data={banks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelect(item, 'bank')}>
                <View style={styles.option}>
                  <Text style={styles.optionText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </TouchableOpacity>

      {/* بخش هزینه‌ها */}
      <TouchableOpacity style={styles.box} onPress={toggleExpenseContent}>
        <View style={styles.toggleButton}>
          <Icon name="chevron-down-outline" size={24} color="black" />
          <Text style={styles.toggleButtonText}>هزینه‌ها</Text>
        </View>

        {loading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          showExpenseContent && (
            <FlatList
              data={expenses}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelect(item, 'expense')}>
                  <View style={styles.option}>
                    <Text style={styles.optionText}>{item.description}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          )
        )}
      </TouchableOpacity>

      {/* بخش درآمدها */}
      <TouchableOpacity style={styles.box} onPress={toggleIncomeContent}>
        <View style={styles.toggleButton}>
          <Icon name="chevron-down-outline" size={24} color="black" />
          <Text style={styles.toggleButtonText}>درآمدها</Text>
        </View>

        {loading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          showIncomeContent && (
            <FlatList
              data={incomes}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelect(item, 'income')}>
                  <View style={styles.option}>
                    <Text style={styles.optionText}>{item.source}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          )
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  box: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 10,
    width: '100%',
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  toggleButtonText: {
    color: '#000',
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 14,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default  ToScreen;