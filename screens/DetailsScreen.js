import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Image, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import globalStyles from '../globalStyles'; // مسیر را به درستی وارد کنید
import Ionicons from 'react-native-vector-icons/Ionicons';

const Option = ({ title, isSelected, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.optionContainer}>
        <RadioButton
            value={title}
            status={isSelected ? 'checked' : 'unchecked'}
            onPress={onPress}
            color="orange" // رنگ نقطه انتخاب شده    
        />
        <Text style={styles.optionText}>{title}</Text>
    </TouchableOpacity>
);

const DonationBox = ({ isVisible, options, selectedOption, setSelectedOption }) => {
    if (!isVisible) return null; // اگر باکس پنهان است، چیزی را نمایش ندهید

    const [amount, setAmount] = useState(0); // مقدار پیش‌فرض

    const handleSelectAmount = (selectedAmount) => {
        setAmount(selectedAmount); // مقدار انتخاب شده را تنظیم می‌کند
    };

    const handleIncrease = () => {
        setAmount(amount + 10000); // افزایش مقدار
    };

    const handleDecrease = () => {
        if (amount > 0) {
            setAmount(amount - 10000); // کاهش مقدار
        }
    };

    return (
        <View style={styles.box}>
            <Text style={styles.matnoptions}>
                لطفا یک گزینه از بین کمک های مالی خیریه‌ای زیر انتخاب کنید.
            </Text>
            <FlatList
                data={options}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Option
                        title={item}
                        isSelected={selectedOption === item}
                        onPress={() => setSelectedOption(item)}
                    />
                )}
            />
            <Text style={styles.matnoptionsbottom}>
                لطفا مبلغی که قصد پرداخت دارید انتخاب بفرمایید یا بصورت دستی وارد نمایید
            </Text>
            <View style={styles.amountbox}>
            <View style={styles.fee}>
                    {[100000, 200000, 400000].map((amt) => (
                        <TouchableOpacity
                            key={amt}
                            style={[styles.amountButton, amount === amt ? styles.selectedAmount : null, { marginHorizontal: 5 }]}
                            onPress={() => handleSelectAmount(amt)}
                        >
                            <Text style={styles.amountText}>{amt.toLocaleString()} تومان</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={amount.toString()}
                        editable={false}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleDecrease}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleIncrease}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.finalAmount}>{amount.toLocaleString()} تومان</Text>
            </View>
        </View>
    );
};

const DetailsScreen = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [amount, setAmount] = useState(3000000);

    const options1 = [
        'هزینه های جاری هیات محبان اهل بیت علیهم السلام',
        'ماهانه مجموعه',
        'صدقه',
    ];

    const options2 = [
        'تحصیل دانش آموز',
        'قربانی',
        'صدقه',
    ];

    const handlePayment = () => {
        alert(`پرداخت انجام شد: ${amount} تومان`);
    };

    return (
        <ScrollView style={globalStyles.container}>
            <View style={styles.optionsContainer}>
                <Text style={styles.toggleButtonText}>
                    همراه گرامی٬ شما میتوانید در عناوین زیر بصورت نقدی کمک های خود را واریز نمایید
                </Text>
            </View>

            <TouchableOpacity onPress={() => setIsVisible1(!isVisible1)} style={styles.toggleButton}>
                <Image
                    source={require('./Image/Iconkife.png')}
                    style={styles.icon}
                />
                <Text style={styles.toggleButtonText}>
                    کیف پول خیریه اهل بیت
                </Text>
                <Ionicons style={styles.icons} name="chevron-down-outline" size={24} color="black" />
            </TouchableOpacity>
            <DonationBox
                isVisible={isVisible1}
                options={options1}
                selectedOption={selectedOption1}
                setSelectedOption={setSelectedOption1}
            />

            <TouchableOpacity onPress={() => setIsVisible2(!isVisible2)} style={styles.toggleButton}>
                <Image
                    source={require('./Image/Iconkife2.png')}
                    style={styles.icon}
                />
                <Text style={styles.toggleButtonText}>
                    کیف پول یارینو
                </Text>
                <Ionicons style={styles.icons} name="chevron-down-outline" size={24} color="black" />
            </TouchableOpacity>
            <DonationBox
                isVisible={isVisible2}
                options={options2}
                selectedOption={selectedOption2}
                setSelectedOption={setSelectedOption2}
            />

<TouchableOpacity
            style={styles.buttonbottom}
            activeOpacity={0.7}
        >
            <Text style={styles.buttonText}>پرداخت</Text>
        </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    toggleButton: {
        backgroundColor: '#FFFFFF',
        height: 50,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    toggleButtonText: {
        color: '#000000',
        fontSize: 16,
        marginLeft: 10,
        flex: 1,
        marginRight: 20,
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    icons: {
        marginLeft: 10,
    },
    box: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
    },
    matnoptions: {
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 19.83,
        letterSpacing: 1,
        textAlign: 'right',
        color: '#000000',
    },
    matnoptionsbottom: {
        padding: 15,
    },
    optionContainer: {
        flexDirection: 'row-reverse',
        padding: 15,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    optionText: {
        fontWeight: '500',
        color: '#000',
        fontSize: 12,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    amountbox: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        marginBottom: 10,
    },
    fee: {
        flexDirection: 'row-reverse',
        marginBottom: 10,
    },
    amountButton: {
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 5, // فاصله افقی بین دکمه‌ها
    },
    selectedAmount: {
        borderColor: '#ff6f61',
        borderWidth: 2,
    },
    amountButton: {
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderColor: '#ff6f61',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        textAlign: 'center',
    },
    button: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginLeft: 5,
    },
    buttonText: {
        fontSize: 24,
        color: '#333',
    },
    finalAmount: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
    },
    buttonbottom: {
        width: 380, // عرض ثابت
        height: 50, // ارتفاع ثابت
        top: 10,
        left: 15, // فاصله از چپ
        borderRadius: 8, // گوشه‌های گرد
        paddingTop: 10, // حاشیه داخلی بالا
        paddingRight: 140, // حاشیه داخلی راست
        paddingBottom: 10, // حاشیه داخلی پایین
        paddingLeft: 140, // حاشیه داخلی چپ
        backgroundColor: '#FF4700', // رنگ پس‌زمینه دکمه
        alignItems: 'center', // مرکز قرار دادن محتوا
    },
    buttonText: {
        color: '#fff', // رنگ متن
        fontSize: 18, // اندازه متن
        fontWeight: 'bold', // ضخامت متن
    },
});

export default DetailsScreen;