import React, { useState } from 'react';
import { View, Button, Alert, StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import CustomInput from './CustomInput'; // مسیر فایل CustomInput.js را تنظیم کنید
import InfoBox from './InfoBox';
import InfoBoxs from './InfoBoxs';
import TextArea from './TextArea';

const InforScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [job, setJob] = useState('');
  const [income, setIncome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (
      firstName.trim().length >= 2 &&
      lastName.trim().length >= 2 &&
      phoneNumber.trim().length > 0 &&
      email.includes('@')
    ) {
      Alert.alert('ارسال شد', `نام: ${firstName}\nایمیل: ${email}`);
      // Reset fields
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setNationalId('');
      setAccountNumber('');
      setJob('');
      setIncome('');
      setEmail('');
    } else {
      Alert.alert('خطا', 'لطفاً اطلاعات معتبر وارد کنید.');
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CustomInput
          label="نام"
          value={firstName}
          onChangeText={setFirstName}
          placeholder="نام خود را وارد کنید"
        />
        <CustomInput
          label="نام خانوادگی"
          value={lastName}
          onChangeText={setLastName}
          placeholder="نام خانوادگی خود را وارد کنید"
        />
        <CustomInput
          label="شماره موبایل"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="شماره موبایل خود را وارد کنید"
        />
        <CustomInput
          label="کد ملی"
          value={nationalId}
          onChangeText={setNationalId}
          placeholder="کد ملی خود را وارد کنید"
        />
        <CustomInput
          label="شماره حساب"
          value={accountNumber}
          onChangeText={setAccountNumber}
          placeholder="شماره حساب خود را وارد کنید"
        />
        <CustomInput
          label="شغل"
          value={job}
          onChangeText={setJob}
          placeholder="شغل خود را وارد کنید"
        />
        <CustomInput
          label="در آمد"
          value={income}
          onChangeText={setIncome}
          placeholder="درآمد خود را وارد کنید"
        />

        <InfoBoxs 
          label="استان" 
          options={[
            { label: 'تهران', value: 'تهران' },
            { label: 'قزوین', value: 'قزوین' },
            { label: 'بوشهر', value: 'بوشهر' },
          ]}
        />

        <InfoBoxs 
          label="شهر" 
          options={[
            { label: 'کرج', value: 'کرج' },
            { label: 'تاکستان', value: 'تاکستان' },
            { label: 'اسفرورین', value: 'اسفرورین' },
          ]}
        />

        <TextArea 
          label="آدرس" 
          placeholder="تهران، ولیعصر، خیابان زهدی، پلاک 90" 
        />

        <InfoBoxs 
          label="وضعیت پرونده" 
          options={[
            { label: 'فعال', value: 'فعال' },
            { label: '--', value: '--' },
            { label: '--', value: '--' },
          ]}
        />

        <InfoBoxs 
          label="جنسیت" 
          options={[
            { label: 'مرد', value: 'مرد' },
            { label: '--', value: '--' },
            { label: '--', value: '--' },
          ]}
        />

        <InfoBoxs 
          label="وضعیت تاهل" 
          options={[
            { label: 'متاهل', value: 'متاهل' },
            { label: '--', value: '--' },
            { label: '--', value: '--' },
          ]}
        />

        <InfoBoxs 
          label="تحصیلات" 
          options={[
            { label: 'بی سواد', value: 'بی سواد' },
            { label: '--', value: '--' },
            { label: '--', value: '--' },
          ]}
        />

        <CustomInput
          label="افراد تحت تفکل"
          value={income}
          onChangeText={setIncome}
          placeholder="تعداد را وارد کنید"
        />

        <CustomInput
          label="تاریخ تولد"
          value={income}
          onChangeText={setIncome}
          placeholder="تاریخ تولد خود را وارد کنید"
        />

        <TextArea 
          label="قصه مددجو" 
          placeholder="متن را وارد کنید" 
        />

        <InfoBoxs 
          label="تحت پوشش" 
          options={[
            { label: 'فاقد پوشش', value: 'فاقد پوشش' },
            { label: '--', value: '--' },
            { label: '--', value: '--' },
          ]}
        />

        <InfoBoxs 
          label="نسبت" 
          options={[
            { label: 'مددجو', value: 'مددجو' },
            { label: '--', value: '--' },
            { label: '--', value: '--' },
          ]}
        />

        <InfoBoxs 
          label="وضعیت سلامتی" 
          options={[
            { label: 'سالم', value: 'سالم' },
            { label: '--', value: '--' },
            { label: '--', value: '--' },
          ]}
        />

        <InfoBoxs 
          label="وضعیت حیات" 
          options={[
            { label: 'زنده', value: 'زنده' },
            { label: 'مفقود', value: 'مفقود' },
            { label: '--', value: '--' },
          ]}
        />

        <InfoBoxs 
          label="وضعیت شغلی" 
          options={[
            { label: 'شاغل', value: 'شاغل' },
            { label: 'در حال تحصیل', value: 'در حال تحصیل' },
            { label: 'در حال خدمت', value: 'در حال خدمت' },
          ]}
        />

        

        <Button title="ارسال" onPress={handleSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 15,
    paddingTop: 40,
    flexGrow: 1,
  },
});

export default InforScreen;