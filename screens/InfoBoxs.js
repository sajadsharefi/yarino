import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

const CountryPicker = ({ label, items, defaultValue }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(defaultValue);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
                itemStyle={styles.itemStyle}
                dropDownStyle={styles.dropdownStyle}
                labelStyle={styles.labelStyle}
                placeholder="یک گزینه انتخاب کنید"
                placeholderStyle={styles.placeholderStyle}
                customArrow={() => (
                    <View style={styles.arrowContainer}>
                        <Icon name="chevron-down" size={18} color="#900" />
                    </View>
                )}
                accessibilityLabel="منوی کشویی انتخاب"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        padding: 10,
        position: 'relative',
    },
    label: {
        position: 'absolute',
        top: -10,
        right: 10,
        backgroundColor: '#ffffff',
        paddingHorizontal: 5,
    },
    dropdown: {
        backgroundColor: '#ffffff',
        borderWidth: 0,
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    itemStyle: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
    },
    dropdownStyle: {
        backgroundColor: '#ffffff',
    },
    labelStyle: {
        textAlign: 'right',
    },
    placeholderStyle: {
        textAlign: 'right',
    },
    arrowContainer: {
        position: 'absolute',
        left: 10,
    },
});

export default CountryPicker;