import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import globalStyles from '../globalStyles'; // مسیر را به درستی وارد کنید
import Ionicons from 'react-native-vector-icons/Ionicons';

function ProfileScreen() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={globalStyles.container}>
      {/* باکس گزارشات */}
      <TouchableOpacity style={styles.box} onPress={toggleExpand}>
        <View style={styles.toggleButton}>
          <View style={styles.iconBox}>
            <Ionicons style={styles.iconstyle} name="document-text-outline" size={24} color="black" />
          </View>

          <Text style={styles.toggleButtonText}>گزارشات</Text>
          <Ionicons name="chevron-down-outline" size={24} color="black" />
        </View>

        <View style={styles.optionsContainer}>
          <View style={styles.option}>
            <View style={styles.titlebox}>
              <View style={styles.iconBox}>
                <Ionicons style={styles.iconstyle} name="checkbox-outline" size={24} color="black" />
              </View>

              <Text style={styles.optionText}>گزارشات تکمیل شده</Text>
            </View>

            <Text style={styles.summary}>۲,۴۵۷</Text>
          </View>

          <View style={styles.option}>
            <View style={styles.titlebox}>
              <View style={styles.iconBox}>
                <Ionicons style={styles.iconstyle} name="document-text-outline" size={24} color="black" />
              </View>

              <Text style={styles.optionText}>گزارشات ثبت شده</Text>
            </View>

            <Text style={styles.summary}>۳,۴۵۰</Text>
          </View>
        </View>

      </TouchableOpacity>
      {expanded && (
        <View style={styles.details}>
          <Text>جزئیات بیشتر درباره گزارشات...</Text>
        </View>
      )}

      {/* بخش مجزای پایین */}
      <View style={styles.detailBox}>
        <View style={styles.detailTitle}>
          <View style={styles.iconBox}>
            <Ionicons style={styles.iconstyle} name="document-text-outline" size={24} color="black" />
          </View>

          <Text style={styles.titlebottom}>موضوع : توزیع اوراق</Text>
        </View>
        
        <View style={styles.row2}>
          <Text>شرح گزارش</Text>
          <Text style={styles.detailDate}>۱۴۰۲/۰۷/۲۵</Text>
        </View>
        <Text style={styles.detailDescription}>
          تحقیقات میدانی در خصوص نیازمندی‌های مددجو
        </Text>
        <View style={styles.detailReporter}>
          <Text>ارجاع به :</Text>
          <Text style={styles.detailDate}>کارشناس جهادی</Text>
        </View>
        <View style={styles.detailReporter2}>
          <Text>گزارش دهنده :</Text>
          <Text style={styles.detailDate}>سعید شریفی</Text>
        </View>

        <View style={styles.iconboxbottom}>
          <Ionicons style={styles.iconbstyle} name="trash-outline" size={24} color="black" />

          <Ionicons style={styles.iconbstyle} name="checkbox-outline" size={24} color="black" />

          <Ionicons style={styles.iconbstyle} name="create-outline" size={24} color="black" />

          <Ionicons style={styles.iconbstyle} name="ellipsis-vertical-outline" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#FFFFFF',
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
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  option: {
    flex: 1,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
  },
  optionText: {
    fontSize: 13,
    marginRight: 6,
  },
  summary: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 30,
  },
  details: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginTop: 5,
    width: '100%',
  },
  row2: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    padding: 10,
  },
  detailBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 20,
    width: '100%',
  },
  detailTitle: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 50,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E2',
    paddingBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  titlebottom: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  detailDate: {
    fontSize: 14,
    color: '#555',
  },
  detailDescription: {
    marginVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E2',
    paddingBottom: 5,
  },
  detailReporter: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E2',
    paddingBottom: 5,
  },
  detailReporter2: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    padding: 10,
  },
  toggleButton: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 50,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E2',
    paddingBottom: 5,
  },
  toggleButtonText: {
    color: '#000000',
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
    marginRight: 4,
  },
  iconBox: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginRight: 10, // فاصله بین آیکون و متن
  },
  iconstyle: {
    fontSize: 20,
  },
  icons: {
    marginLeft: 10,
  },
  titlebox: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 30,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  iconboxbottom: {
    flexDirection: 'row',        // آیکون‌ها را در یک خط نمایش می‌دهد
    alignItems: 'center',        // تراز عمودی آیکون‌ها
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 15,
  },
  iconbstyle: {
    marginRight: 10,             // فاصله بین آیکون‌ها
  },
});

export default ProfileScreen;