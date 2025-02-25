import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const TextArea = ({ label, placeholder }) => {
    const [address, setAddress] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.textArea}
                multiline
                numberOfLines={4} // تعداد خطوط پیش‌فرض
                placeholder={placeholder}
                placeholderTextColor="#999" // رنگ متن راهنما
                value={address}
                onChangeText={text => setAddress(text)} // برای به‌روزرسانی متن
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
        borderWidth: 1, // اضافه کردن مرز به باکس
        borderColor: '#ccc', // رنگ مرز
        borderRadius: 5, // گرد کردن گوشه‌ها
        padding: 10, // فضای داخلی
        position: 'relative', // برای قرار دادن لیبل
    },
    label: {
        position: 'absolute', // موقعیت لیبل
        top: -10, // فاصله از بالا
        right: 10, // فاصله از راست
        backgroundColor: '#ffffff', // پس‌زمینه لیبل
        paddingHorizontal: 5, // فضای افقی داخل لیبل
    },
    textArea: {
        height: 100, // ارتفاع متن‌نویس
        borderWidth: 0, // حذف مرز در متن‌نویس
        padding: 10, // فضای داخلی
        textAlign: 'right', // راست‌چین کردن متن
        backgroundColor: '#ffffff', // پس‌زمینه سفید
    },
});

export default TextArea;