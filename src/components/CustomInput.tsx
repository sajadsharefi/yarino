import { Platform, StyleSheet, Text, TextInputProps, View } from 'react-native'
import React from 'react'
import TitleText from './TitleText'
import ROW from './ROW'
import { scale } from 'react-native-size-matters'
import { TextInput } from 'react-native-gesture-handler'


const CustomInput = ({ title, value, setValue, multiline = false, backgroundColor, ...props }): TextInputProps => {

    return (
        <ROW bw={1} bc={'#cecece'} br={12} row aligncenter>
            <ROW bg={backgroundColor ?? '#fff'} style={{ position: 'absolute', top: -9, right: 8 }} ph={8}>
                <TitleText color={'#000'} lh={16} size={12} >{title}</TitleText>
            </ROW>
            <TextInput

                placeholderTextColor={'#000'}
                multiline={multiline ?? false}
                selectionColor={'#cecece'}
                value={value}
                onChangeText={setValue}
                {...props}
                style={Platform.OS == "ios" ? {
                    backgroundColor: 'transparent',
                    color: '#000',
                    fontFamily: 'IRANSansWebFaNum',
                    fontSize: value ? scale(15) : scale(12),
                    paddingHorizontal: 16,
                    height: multiline ? 200 : 56,
                    paddingTop: multiline ? 12 : 0,
                    flex: 1,
                    textAlignVertical: multiline ? 'top' : 'center',
                    ...props.style
                } : {
                    backgroundColor: 'transparent',
                    color: '#000',
                    fontFamily: 'IRANSansWebFaNum',
                    fontSize: value ? scale(15) : scale(12),
                    paddingHorizontal: 16,
                    lineHeight: 28,
                    paddingTop: 12,
                    height: multiline ? 200 : 56,
                    flex: 1,
                    textAlignVertical: multiline ? 'top' : 'center',
                    ...props.style
                }}
            />

        </ROW>
    )
}

export default CustomInput

const styles = StyleSheet.create({})