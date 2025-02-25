import React from "react";
import { Clipboard, Pressable, StyleSheet, Text } from "react-native";
import { SnackBar } from "../../utils/SnackBar";


const TitleText = ({ copy = false, style, color = "#3D2600", bold = false, size = 14, children, numberOfLines = 2 }) => {
    if (copy) {
        return (
            <Pressable style={style} onPress={() => {
                Clipboard.setString(children)
                SnackBar('success', 'از متن رونوشت برداشته شد')
            }}><Text numberOfLines={numberOfLines}
                style={[bold ? { fontFamily: "IRANSansWebFaNum-Bold", } : { fontFamily: 'IRANSansWebFaNum-Medium' }, {
                    fontSize: size,
                    color: color,
                    direction: 'rtl'
                }, style, styles.text]}>{children}</Text></Pressable>
        );
    }

    return (
        <Text numberOfLines={numberOfLines}
            style={[bold ? { fontFamily: "IRANSansWebFaNum-Bold", } : { fontFamily: 'IRANSansWebFaNum-Medium' }, {
                fontSize: size,
                color: color,
                direction: 'rtl'
            }, style, styles.text]}>{children}</Text>
    );
};

export default TitleText;

const styles = StyleSheet.create({});