import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // صفحه اصلی
import DetailsScreen from './screens/DetailsScreen'; // صفحه جزئیات
import ProfileScreen from './screens/ProfileScreen'; // صفحه پروفایل
import InforScreen from './screens/InforScreen'; // صفحه اطلاعات
import FileScreen from './screens/FileScreen'; // صفحه پرونده ها
import TestPage from './screens/TestPage'; // صفحه  تست
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();

const CustomHeader = ({ navigation, title, icon }) => {
  return (
    <View style={styles.container} >
      <Text style={{ marginLeft: 'auto', fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
      <Ionicons style={styles.icon} name={icon} size={24} color="black" />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white', // اضافه کردن این خط
    borderBottomWidth: 2, // ضخامت حاشیه
    borderBottomColor: '#2222a8', // رنگ حاشیه
    paddingBottom: 5, // فضای بین متن و حاشیه
  },
  icon: {
    marginLeft: 20,
  }
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* صفحه اصلی با هدر ساده */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'صفحه اصلی',
            headerShown: true }} 
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ 
            header: (props) => <CustomHeader {...props} title="کمک نقدی" icon="git-branch-outline" />,
          }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ 
            header: (props) => <CustomHeader {...props} title="گزارشات کاربر علی مرادی" icon="link-outline" />,
          }} 
        />
        <Stack.Screen 
          name="Infor" 
          component={InforScreen} 
          options={{ 
            header: (props) => <CustomHeader {...props} title="اطلاعات مددجو" icon="create-outline" />,
          }} 
        />
        <Stack.Screen 
          name="File" 
          component={FileScreen} 
          options={{ 
            header: (props) => <CustomHeader {...props} title="پرونده ها" icon="duplicate-outline" />,
          }} 
        />
        <Stack.Screen 
          name="Test" 
          component={TestPage} 
          options={{ 
            header: (props) => <CustomHeader {...props} title="پرونده ها" icon="duplicate-outline" />,
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;